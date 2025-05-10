package com.carsagency.Repositories;

import com.carsagency.models.Car;
import com.carsagency.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findCustomerByEmail(String email);

    @Query("SELECT c FROM Customer c LEFT JOIN FETCH c.savedCars WHERE c.id = :id")
    Customer findCustomerWithSavedCars(@Param("id") Long id);


}
