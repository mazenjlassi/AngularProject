package com.carsagency.Repositories;

import com.carsagency.models.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, Long> {

   List<Car> findCarsBySavedByCustomers_Id(Long id);
}
