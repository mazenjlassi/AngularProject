package com.carsagency.Repositories;

import com.carsagency.models.Car;
import com.carsagency.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findCustomerByEmail(String email);

}
