package com.carsagency.models;

import jakarta.persistence.*;
import lombok.Data;


    @Entity
    @Data
    public class Cars {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String img;

        private String model;
        private int year;
        private double price;

        @ManyToOne
        private Brand brand;


        // Constructors, getters, setters
    }


