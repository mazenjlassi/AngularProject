package com.carsagency.Services;


import com.carsagency.Repositories.CustomerRepository;
import com.carsagency.models.Car;
import com.carsagency.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer add(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer find(Long id) {
        return customerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer with ID " + id + " not found"));
    }

    public void delete(Long id) {
        customerRepository.deleteById(id);
    }

    public Customer update(Customer customer) {
        return customerRepository.saveAndFlush(customer);
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public List<Car> SavedCar(Long customerId) {
        Customer customer = customerRepository.findCustomerWithSavedCars(customerId);
        if (customer == null) {
            throw new RuntimeException("Customer not found");
        }
        return customer.getSavedCars();
    }


}
