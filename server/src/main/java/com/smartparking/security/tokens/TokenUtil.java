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
    TokenPair generateTokenPair(UserDetails user);
    String getUsernameFromToken(String token);
}
