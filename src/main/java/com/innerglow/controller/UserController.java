package com.innerglow.controller;

import com.innerglow.model.User;
import com.innerglow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public User signUp(@RequestBody User user) {
        return userRepository.save(user);
    }
}
