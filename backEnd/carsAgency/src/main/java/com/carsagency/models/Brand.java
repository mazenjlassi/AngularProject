package com.carsagency.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "brand")
    private List<Cars> cars;

    // Constructors, getters, setters
}
