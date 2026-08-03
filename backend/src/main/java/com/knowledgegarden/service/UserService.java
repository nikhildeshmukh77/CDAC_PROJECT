package com.knowledgegarden.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.knowledgegarden.dto.LoginRequest;
import com.knowledgegarden.dto.RegisterRequest;
import com.knowledgegarden.entity.User;
import com.knowledgegarden.repository.UserRepository;
import com.knowledgegarden.util.JwtUtil;
import com.knowledgegarden.util.CustomUserDetailsImpl;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }
    public String register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already registered";
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setRole(request.getRole());

        userRepository.save(user);

        return "User registered successfully";
    }

    public String login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElse(null);

        if (user == null) {
            return "User not found";
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return "Invalid password";
        }

        CustomUserDetailsImpl userDetails = new CustomUserDetailsImpl(
                user.getId(), user.getName(), user.getEmail(), user.getPassword(), user.getRole());

        return jwtUtil.generateJWT(userDetails);
    }
}