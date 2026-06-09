package com.knowledgegarden.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.knowledgegarden.dto.LoginRequest;
import com.knowledgegarden.dto.RegisterRequest;
import com.knowledgegarden.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(
            @RequestBody RegisterRequest request) {

        return ResponseEntity.ok(
                userService.register(request));
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> login(
            @RequestBody LoginRequest request) {

        return ResponseEntity.ok(
                userService.login(request));
    }
}