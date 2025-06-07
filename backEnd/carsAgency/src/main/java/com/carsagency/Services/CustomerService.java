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

    public List<Car> PurchasedCar(Long customerId) {
        Customer customer = customerRepository.findCustomerWithPurchasedCars(customerId);

        if (customer == null) {
            throw new RuntimeException("Customer not found");
        }

        System.out.println("Customer ID: " + customer.getId());
        System.out.println("Number of purchased cars: " + customer.getPurchasedCars().size());

        for (Car car : customer.getPurchasedCars()) {
            System.out.println("Car ID: " + car.getId() + ", Model: " + car.getModel());
        }

        return customer.getPurchasedCars();
    }



}
