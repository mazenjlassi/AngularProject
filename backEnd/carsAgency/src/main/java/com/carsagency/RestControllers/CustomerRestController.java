package com.carsagency.RestControllers;


import com.carsagency.Repositories.CustomerRepository;
import com.carsagency.Services.CarService;
import com.carsagency.Services.CustomerService;
import com.carsagency.models.Car;
import com.carsagency.models.Customer;
import org.antlr.v4.runtime.atn.SemanticContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/Customer")
public class CustomerRestController {

    @Autowired
    private CustomerService customerService;

    @Autowired
    private CarService carService;

    @Autowired
    private CustomerRepository customerRepository;

    @PostMapping("/add")
    public ResponseEntity<Customer> add(@RequestBody Customer customer) {
        try {
            customerService.add(customer);
            return new ResponseEntity<>(customer, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> all() {
        try {
            List<Customer> customeres = customerService.findAll();
            if (customeres.isEmpty()) {
                return new ResponseEntity<>(customeres, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(customeres, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/findById/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Long id) {
        Customer customer = customerService.find(id);
        if (customer != null) {
            return new ResponseEntity<>(customer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> update(@PathVariable Long id, @RequestBody Customer customer) {
        Customer existingCustomer = customerService.find(id);
        if (existingCustomer != null) {
            customerService.update(customer);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        try {
            customerService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/SavedCars/{id}")
    public ResponseEntity<?> SavedCar(@PathVariable Long id) {
        try {
            List<Car> savedCars = carService.SavedCar(id);

            if (savedCars.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(savedCars, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/Signup")
    public ResponseEntity<Customer> Signup(@RequestBody Customer customer) {
        try {
            if (customerRepository.findCustomerByEmail(customer.getEmail()) != null) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            customerService.add(customer);
            return new ResponseEntity<>(customer, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/Login")
    public ResponseEntity<Customer> Login(@RequestBody Customer customer) {
        try {
            if (customerRepository.findCustomerByEmail(customer.getEmail()).getEmail() == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            Customer c = customerRepository.findCustomerByEmail(customer.getEmail());
            if (!Objects.equals(c.getPassword(), customer.getPassword())) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}





