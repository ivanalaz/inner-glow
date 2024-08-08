package com.innerglow.dto;

import lombok.Data;

@Data
public class UserDTO {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String confirmPassword;
    private String dateOfBirth;
    private String gender;
    private boolean interestFitness;
    private boolean interestMindfulness;
    private boolean interestProductivity;
    private boolean cycleTracking;
    private String language;
    private boolean newsletter;
    private boolean terms;

    // Getters and setters
}

