package com.smartparking.controller;

import com.smartparking.model.request.SocialSignInRequest;
import com.smartparking.security.exception.*;
import com.smartparking.model.request.RegistrationRequest;
import com.smartparking.model.response.AuthTokenResponse;
import com.smartparking.model.request.LoginRequest;
import com.smartparking.model.response.InfoResponse;
import com.smartparking.security.tokens.TokenPair;
import com.smartparking.service.email.EmailService;
import com.smartparking.service.impl.SpringSecurityUserService;
import com.smartparking.security.tokens.TokenUtil;
import com.smartparking.entity.SpringSecurityUser;
import com.smartparking.security.utils.Validator;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class SecurityController {
    private static final Logger LOGGER = LoggerFactory.getLogger(SecurityController.class);
    @Autowired
    private Validator validator;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenUtil tokenUtil;

    @Autowired
    @Qualifier("MyUserDetails")
    private UserDetailsService userService;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Autowired
    EmailService emailService;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody LoginRequest loginRequest) throws AuthenticationException {
        final String email;
        final String password;
        try {
            email = validator.validateEmailOnLogin(loginRequest.getEmail());
            password = validator.validatePassword(loginRequest.getPassword());
        } catch (AuthorizationEx e) {
            LOGGER.warn(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new InfoResponse(e.getMessage()));
        }
        LOGGER.info("Search user with username " + email);
        final UserDetails user = userService.loadUserByUsername(email);
        LOGGER.info(email + " = " + user);
        if(user != null && bcryptEncoder.matches(password, user.getPassword())) {
            final Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final TokenPair tokenPair = tokenUtil.generateTokenPair(user);
            return ResponseEntity.ok(new AuthTokenResponse(tokenPair.getAccessToken(), tokenPair.getRefreshToken()));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new InfoResponse("Password is incorrect"));
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity saveUser(@RequestBody RegistrationRequest regReq) {
        try {
            ((SpringSecurityUserService)userService).saveClientFromRegistrationRequest(regReq);
        } catch (AuthorizationEx e) {
            LOGGER.warn(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new InfoResponse(e.getMessage()));
        }
        new Thread(() -> emailService.prepareAndSendWelcomeEmail(regReq.getEmail(),regReq.getFirstname())).start();
        LOGGER.info("Registered successfull");
        return ResponseEntity.status(HttpStatus.OK).body(new InfoResponse("You are successfull registered"));
    }

    @RequestMapping(value = "/social", method = RequestMethod.POST)
    public ResponseEntity socialSignIn(@RequestBody SocialSignInRequest request) {
        LOGGER.info("Try to sign in with social");
        UserDetails user = null;
        LOGGER.info("Now user = " + null);
        String email = ((SpringSecurityUserService) userService).constructEmailForSocial(request.getEmail(), request.getProvider());
        LOGGER.info("Created email = " + email);
        while(user == null) {
            LOGGER.info("Entry into loop");
            try {
                LOGGER.info("Loading user");
                user = userService.loadUserByUsername(email);
                LOGGER.info("Loaded user = " + user);
            } catch (Exception e) {
                LOGGER.info("Catch exception = " + e);
                try {
                    LOGGER.info("try to save client");
                    ((SpringSecurityUserService) userService).saveClientFromSocialSignInRequest(request);
                    LOGGER.info("Client saved");
                } catch (AuthorizationEx ex) {
                    LOGGER.warn(ex.getMessage());
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new InfoResponse(e.getMessage()));
                }
            }
        }
        LOGGER.info("Try to authorize");
        if(user != null && bcryptEncoder.matches(request.getId(), user.getPassword())) {
            LOGGER.info("Start authorization");
            final Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, request.getId())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final TokenPair tokenPair = tokenUtil.generateTokenPair(user);
            return ResponseEntity.ok(new AuthTokenResponse(tokenPair.getAccessToken(), tokenPair.getRefreshToken()));
        }
        return ResponseEntity.status(HttpStatus.OK).body(new InfoResponse("You are successfuly authorized"));
    }


}
