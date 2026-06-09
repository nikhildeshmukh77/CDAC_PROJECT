package com.knowledgegarden.service;

import org.springframework.stereotype.Service;

import com.knowledgegarden.dto.LoginRequest;
import com.knowledgegarden.dto.RegisterRequest;
import com.knowledgegarden.entity.User;
import com.knowledgegarden.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already registered";
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());

        // later encrypt using BCrypt
        user.setPassword(request.getPassword());

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

        if (!user.getPassword().equals(request.getPassword())) {
            return "Invalid password";
        }

        return "Login successful";
    }
}