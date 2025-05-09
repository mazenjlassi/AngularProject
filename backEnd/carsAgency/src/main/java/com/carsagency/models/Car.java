package com.carsagency.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private String img2;
    private String img3;
    private String img4;

    private String model;
    private int year;
    private double price;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "brand_id")
    private Brand brand;

    private Integer horsepower;
    private String fuelType;
    private String transmission;
    private String color;
    private Double fuelEfficiency;
    private Double engineCapacity;
    private Double speed;
    private Integer seats;
    private Double fuelTankCapacity;
    private Double fuelConsumption;
    private Double acceleration;
    private Double topSpeed;
    private Double torque;

    @ManyToMany
    @JoinTable(
            name = "car_saved_by_customer",
            joinColumns = @JoinColumn(name = "car_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id")
    )
    private List<Customer> savedByCustomers;

    @ManyToMany
    @JoinTable(
            name = "car_purchased_by_customer",
            joinColumns = @JoinColumn(name = "car_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id")
    )
    private List<Customer> purchasedByCustomers;
}
