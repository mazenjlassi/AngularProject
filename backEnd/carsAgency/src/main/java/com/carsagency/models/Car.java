package com.carsagency.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
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
    @JoinColumn(name = "brand_id")
    @JsonIncludeProperties({"id", "name", "image"})
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

    @ManyToMany(mappedBy = "savedCars")
    @JsonIgnore // To avoid infinite loop during serialization
    private List<Customer> savedByCustomers;


    @ManyToMany
    @JoinTable(
            name = "car_purchased_by_customer",
            joinColumns = @JoinColumn(name = "car_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id")
    )
    private List<Customer> purchasedByCustomers;
}
