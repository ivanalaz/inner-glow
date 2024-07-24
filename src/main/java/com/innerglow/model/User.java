package com.innerglow.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private String dateOfBirth;
    private String gender;
    private boolean interestFitness;
    private boolean interestMindfulness;
    private boolean interestProductivity;
    private boolean cycleTracking;
    private String language;
    private boolean newsletter;

}
