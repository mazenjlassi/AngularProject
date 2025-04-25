package com.carsagency.Repositories;

import com.carsagency.models.Cars;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarsRepository extends JpaRepository<Cars, Long> {}

