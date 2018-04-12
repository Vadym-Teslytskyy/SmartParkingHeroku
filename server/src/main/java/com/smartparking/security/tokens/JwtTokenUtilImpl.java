package com.smartparking.security.tokens;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenUtilImpl implements TokenUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(JwtTokenUtilImpl.class);

    private static final String CLAIM_AUTHORITIES_KEY = "authorities";
    private static final String CLAIM_USERNAME_KEY = "username";

    @Value("${jwt.tokenSecret}")
    private String tokenSecret;
    @Value("${jwt.accessTokenExpiration}")
    private Long tokenExpiration;
    @Value("${jwt.refreshTokenExpiration}")
    private Long refreshTokenExpiration;



    public String getUsernameFromToken(String token) {
        return (String) getAllClaimsFromToken(token).get(CLAIM_USERNAME_KEY);
    }


    private String generateAccessToken(UserDetails user) {
        return Jwts.builder().setClaims(generateClaims(user))
                .signWith(SignatureAlgorithm.HS512, tokenSecret)
                .setExpiration(genAccessTokenExpDate())
                .compact();
    }

    private String generateRefreshToken(UserDetails user) {
        return Jwts.builder().setClaims(generateClaims(user))
                .signWith(SignatureAlgorithm.HS512, tokenSecret)
                .setExpiration(genRefreshTokenExpDate())
                .compact();
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(tokenSecret)
                .parseClaimsJws(token)
                .getBody();
    }

    private Map<String, Object> generateClaims(UserDetails user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put(CLAIM_AUTHORITIES_KEY, user.getAuthorities());
        claims.put(CLAIM_USERNAME_KEY, user.getUsername());
        return claims;
    }

    private Date genAccessTokenExpDate() {
        return new Date(System.currentTimeMillis() + tokenExpiration);
    }

    private Date genRefreshTokenExpDate() {
        return new Date(System.currentTimeMillis() + refreshTokenExpiration);
    }

    private Date getExpDateFromToken(String token) {
        Date created;
        try {
            created = Jwts.parser().setSigningKey(tokenSecret).parseClaimsJws(token).getBody().getExpiration();
        } catch (NullPointerException e) {
            LOGGER.warn("Can`t get expiration time");
            created = null;
        }
        return created;
    }

    private Boolean isTokenExpired(String token) {
        final Date tokenExpiration = getExpDateFromToken(token);
        return tokenExpiration.before(new Date());
    }

    public TokenPair generateTokenPair(UserDetails user) {
        return new TokenPair(generateAccessToken(user), generateRefreshToken(user));
    }











}
