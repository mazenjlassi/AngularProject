package com.carsagency.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantity;
    private LocalDate purchaseDate;


    @ManyToOne
    private Customer customer;

    @ManyToOne
    private Car car;


}
