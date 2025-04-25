package com.carsagency.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String img;
    private String model;
    private int year;
    private double price;

    @ManyToOne
    private Brand brand;

    @ManyToMany(mappedBy = "savedCars")
    private List<Customer> savedByCustomers;

    @ManyToMany(mappedBy = "purchasedCars")
    private List<Customer> purchasedByCustomers;
}
