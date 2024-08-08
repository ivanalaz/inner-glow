package com.innerglow.service;

import com.innerglow.dto.UserDTO;
import com.innerglow.exception.UserAlreadyExistsException;
import com.innerglow.model.User;
import com.innerglow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO getUserById(Long id) {
        return userRepository.findById(id)
                .map(this::convertToDTO)
                .orElse(null);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = convertFromDTO(userDTO);
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new UserAlreadyExistsException("Email is already in use");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);
        return convertToDTO(savedUser);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO userDTO) {
        if (!userRepository.existsById(id)) {
            return null;
        }
        User user = convertFromDTO(userDTO);
        user.setId(id);
        User updatedUser = userRepository.save(user);
        return convertToDTO(updatedUser);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    private UserDTO convertToDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setEmail(user.getEmail());
        dto.setDateOfBirth(user.getDateOfBirth());
        dto.setGender(user.getGender());
        dto.setInterestFitness(user.isInterestFitness());
        dto.setInterestMindfulness(user.isInterestMindfulness());
        dto.setInterestProductivity(user.isInterestProductivity());
        dto.setCycleTracking(user.isCycleTracking());
        dto.setLanguage(user.getLanguage());
        dto.setNewsletter(user.isNewsletter());
//        dto.setTerms(user.isTerms());
        return dto;
    }

    private User convertFromDTO(UserDTO dto) {
        User user = new User();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setDateOfBirth(dto.getDateOfBirth());
        user.setGender(dto.getGender());
        user.setInterestFitness(dto.isInterestFitness());
        user.setInterestMindfulness(dto.isInterestMindfulness());
        user.setInterestProductivity(dto.isInterestProductivity());
        user.setCycleTracking(dto.isCycleTracking());
        user.setLanguage(dto.getLanguage());
        user.setNewsletter(dto.isNewsletter());
//        user.setTerms(dto.isTerms());
        return user;
    }
}
