package com.smartparking.security.tokens;

import com.smartparking.entity.SpringSecurityUser;
import io.jsonwebtoken.Claims;
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

    String generateToken(SpringSecurityUser user);

    Boolean validateToken(String token, UserDetails userDetails);

    Map<String, Object> generateClaims (SpringSecurityUser user);

    Date generateExpirationDate();
}
