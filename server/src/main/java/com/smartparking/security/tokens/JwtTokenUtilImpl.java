package com.smartparking.security.tokens;

import com.smartparking.entity.SpringSecurityUser;
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

    @Value("${app.jwt.secret}")
    private String SECRET_KEY;

    @Value("${app.jwt.expiration_time}")
    private Long expiration;

    @Override
    public String getUsernameFromToken(String token) {
        return (String) getAllClaimsFromToken(token).get(CLAIM_USERNAME_KEY);
    }

    @Override
    public Date getExpirationDateFromToken(String token) {
        Date created;
        try {
            created = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody().getExpiration();
        } catch (NullPointerException e) {
            LOGGER.warn("Can`t get expiration time");
            created = null;
        }
        return created;
    }

    @Override
    public Claims getAllClaimsFromToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    @Override
    public Boolean isTokenExpired(String token) {
        final Date tokenExpiration = getExpirationDateFromToken(token);
        return tokenExpiration.before(new Date());
    }

    @Override
    public String generateToken(SpringSecurityUser user) {
        return Jwts.builder().setClaims(generateClaims(user))
                .setSubject(String.valueOf(user.getId()))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .setExpiration(generateExpirationDate())
                .compact();
    }

    @Override
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    @Override
    public Map<String, Object> generateClaims(SpringSecurityUser user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put(CLAIM_AUTHORITIES_KEY, user.getAuthorities());
        claims.put(CLAIM_USERNAME_KEY, user.getUsername());
        return claims;
    }

    @Override
    public Date generateExpirationDate() {
        return new Date(System.currentTimeMillis() + expiration);
    }
}
