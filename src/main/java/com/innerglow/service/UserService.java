package com.innerglow.service;

import com.innerglow.dto.UserDTO;
import com.innerglow.model.User;

import java.util.List;

public interface UserService {

    List<UserDTO> getAllUsers();
    UserDTO getUserById(Long id);
    User findByEmail(String email);
    UserDTO createUser(UserDTO userDTO);
    UserDTO updateUser(Long id, UserDTO userDTO);
    void deleteUser(Long id);
}
