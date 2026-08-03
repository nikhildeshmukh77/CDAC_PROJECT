
package com.knowledgegarden.util;

import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtil {

	//Value based D.I name & value tags in xml file
		@Value("${jwt.secret.key}") //eg of SpEL - spring expression language
		private String secret;
		@Value("${jwt.exp.time}")
		private long expTime; //JWT exp time in msec
		private SecretKey key; //represent symmetric key - same key will be used in signing the token as well as verification
	
		@PostConstruct
		public void myInit() {
			log.info("******* in init - generating symmetric secret key SHA 256");
			key=Keys.hmacShaKeyFor(secret.getBytes());
		}
		
		public String generateJWT(CustomUserDetailsImpl userDetails)
		{
			Date now=new Date();
			Date expDate=new Date(now.getTime()+expTime); 
			return Jwts.builder() //creates JWT builder 
					.subject(userDetails.getUsername()) //adding subject
					.issuedAt(now) //adding iat
					.expiration(expDate) //adidng exp
					//add custom claims
					.claims			
					(Map.of("user_id", userDetails.getUserId(), //k1,v1
							"user_role",userDetails.getRole().name()))
					.signWith(key)
					.compact();
					
		}
		public String extractEmail(String token) {
		    return extractAllClaims(token).getSubject();
		}
		public boolean isTokenValid(String token) {
		    try {
		        return !isTokenExpired(token);
		    } catch (Exception e) {
		        log.warn("JWT validation failed: {}", e.getMessage());
		        return false;
		    }
		}
		private boolean isTokenExpired(String token) {
		    return extractAllClaims(token).getExpiration().before(new Date());
		}

		private Claims extractAllClaims(String token) {
		    return Jwts.parser()
		            .verifyWith(key)
		            .build()
		            .parseSignedClaims(token)
		            .getPayload();
		}
	
}