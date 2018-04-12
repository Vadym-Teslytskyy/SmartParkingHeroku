package com.smartparking.security.filters;

import com.smartparking.security.tokens.TokenPair;
import com.smartparking.security.tokens.TokenUtil;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtAuthenticationFilter.class);
    @Autowired
    @Qualifier("MyUserDetails")
    private UserDetailsService userDetailsService;

    @Autowired
    private TokenUtil tokenUtil;

    @Value("${jwt.accessTokenHeader}")
    private String accessTokenHeader;

    @Value("${jwt.refreshTokenHeader}")
    private String refreshTokenHeader;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String accessToken = request.getHeader(accessTokenHeader);
        String refreshToken = request.getHeader(refreshTokenHeader);

        LOGGER.info("AccessHeader header = " + accessToken);
        LOGGER.info("RefreshHeader header = " + refreshToken);

        String username = null;
        if (accessToken != null) {
            LOGGER.info("Go in access token filter");
            try {
                username = tokenUtil.getUsernameFromToken(accessToken);
                LOGGER.info("Find user with username " + username);
            } catch (IllegalArgumentException e) {
                LOGGER.warn("Claims jws string is or empty or only whitespace");
            } catch (ExpiredJwtException e) {
                LOGGER.warn("The token is expired and not valid anymore");
            } catch (SignatureException e) {
                LOGGER.warn("JWS signature validation fails");
            }
        }
        if (refreshToken != null) {
            LOGGER.info("Go in refresh token filter");
            try {
                username = tokenUtil.getUsernameFromToken(refreshToken);
                TokenPair tokenPair = tokenUtil.generateTokenPair(userDetailsService.loadUserByUsername(username));
                response.addHeader("access-control-expose-headers", accessTokenHeader + ", " + refreshTokenHeader);
                response.setHeader(accessTokenHeader, tokenPair.getAccessToken());
                response.setHeader(refreshTokenHeader, tokenPair.getRefreshToken());
            } catch (IllegalArgumentException e) {
                LOGGER.warn("Claims jws string is or empty or only whitespace");
            } catch (ExpiredJwtException e) {
                LOGGER.warn("The token is expired and not valid anymore");
                response.sendError(401, "Refresh token expired");
            } catch (SignatureException e) {
                LOGGER.warn("JWS signature validation fails");
            }
        }
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
            authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            LOGGER.info("Authenticated user " + username + ", setting security context");
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        if(!response.isCommitted()) {
            filterChain.doFilter(request, response);
        }
    }
}
