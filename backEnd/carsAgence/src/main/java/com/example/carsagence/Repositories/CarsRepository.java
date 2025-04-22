package com.example.carsagence.Repositories;

import com.example.carsagence.models.Cars;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarsRepository extends JpaRepository<Cars, Long> {}

