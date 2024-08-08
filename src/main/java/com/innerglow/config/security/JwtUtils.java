package com.innerglow.config.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtUtils {
    public static String generateJwtToken(Authentication authentication) {
        SecretKey key = Keys.hmacShaKeyFor(SecurityConstants.SECRET.getBytes());
        return Jwts.builder()
                .setSubject(((UserDetails) authentication.getPrincipal()).getUsername())
                .setExpiration(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }
}