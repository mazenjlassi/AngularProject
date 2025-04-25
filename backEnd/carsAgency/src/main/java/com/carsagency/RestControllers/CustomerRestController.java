package com.carsagency.RestControllers;


import com.carsagency.Services.CustomerService;
import com.carsagency.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Customer")
public class CustomerRestController {

   @Autowired
   private CustomerService customerService;

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







}
