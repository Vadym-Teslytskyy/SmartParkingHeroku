package com.smartparking.security.tokens;

import com.smartparking.entity.SpringSecurityUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;

@Component
public interface TokenUtil {
    String getUsernameFromToken(String token);

    Date getExpirationDateFromToken(String token);

    Claims getAllClaimsFromToken(String token);

    Boolean isTokenExpired(String token);

    String generateToken(UserDetails user);

    Boolean validateToken(String token, UserDetails userDetails);

    Map<String, Object> generateClaims (UserDetails user);

    Date generateExpirationDate();

    String refreshToken(ExpiredJwtException e);
}
