package com.example.carsagence.models;

import jakarta.persistence.*;


    @Entity
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


