package com.carsagency.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String phoneNumber;
    private String email;
    private String password;

    @OneToMany(mappedBy = "customer")
    private List<Cars> cars;

    // Constructors, getters, setters
}
