package com.carsagency.RestControllers;


import com.carsagency.Services.CarsService;
import com.carsagency.models.Cars;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarsRestController {

    @Autowired
    private CarsService carsService;

    @PostMapping("/add")
    public ResponseEntity<Cars> add(@RequestBody Cars cars) {
        try {
            carsService.add(cars);
            return new ResponseEntity<>(cars, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Cars>> all() {
        try {
            List<Cars> carsList = carsService.findAll();
            if (carsList.isEmpty()) {
                return new ResponseEntity<>(carsList, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(carsList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Cars> findById(@PathVariable Long id) {
        Cars cars = carsService.find(id);
        if (cars != null) {
            return new ResponseEntity<>(cars, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Cars> update(@PathVariable Long id, @RequestBody Cars cars) {
        Cars existingCar = carsService.find(id);
        if (existingCar != null) {
            carsService.update(cars);
            return new ResponseEntity<>(cars, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        try {
            carsService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
