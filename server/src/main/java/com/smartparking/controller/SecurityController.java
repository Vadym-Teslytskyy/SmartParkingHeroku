package com.smartparking.controller;

import com.smartparking.security.exception.AuthorizationEx;
import com.smartparking.model.request.RegistrationRequest;
import com.smartparking.model.response.AuthTokenResponse;
import com.smartparking.model.request.LoginRequest;
import com.smartparking.model.response.InfoResponse;
import com.smartparking.service.impl.SpringSecurityUserService;
import com.smartparking.security.tokens.TokenUtil;
import com.smartparking.entity.SpringSecurityUser;
import com.smartparking.security.utils.Validator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
    private SpringSecurityUserService userService;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @RequestMapping(value = "/generate-token", method = RequestMethod.POST)
    public ResponseEntity register(@RequestBody LoginRequest loginRequest) throws AuthenticationException {
        LOGGER.info("Start validation process");
        final String email;
        final String password;
        try {
            email = validator.validateEmailOnLogin(loginRequest.getEmail());
            password = validator.validatePassword(loginRequest.getPassword());
        } catch (AuthorizationEx e) {
            LOGGER.warn(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new InfoResponse(e.getMessage()));
        }
        LOGGER.info("Start authorization process");
        LOGGER.info("Search user with username " + email);
        final UserDetails user = userService.loadUserByUsername(email);
        LOGGER.info(email + " = " + user);
        LOGGER.info("Start validation");
        if(user != null && bcryptEncoder.matches(password, user.getPassword())) {
            LOGGER.info("User is valid");
            final Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final String token = tokenUtil.generateToken((SpringSecurityUser) user);
            return ResponseEntity.ok(new AuthTokenResponse(token));
        }
        LOGGER.info("Password is incorrect.");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new InfoResponse("Password is incorrect"));
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public ResponseEntity saveUser(@RequestBody RegistrationRequest regReq) {
        LOGGER.info("Start registration");
        try {
            userService.saveClientFromRegistrationRequest(regReq);
        } catch (AuthorizationEx e) {
            LOGGER.warn(e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new InfoResponse(e.getMessage()));
        }
        LOGGER.info("Registered successfully");
        return ResponseEntity.status(HttpStatus.OK).body(new InfoResponse("You are successfully registered"));
    }
}
