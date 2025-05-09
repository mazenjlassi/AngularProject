package com.carsagency.RestControllers;


import com.carsagency.Services.CarService;
import com.carsagency.models.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarRestController {

    @Autowired
    private CarService carService;

    @PostMapping("/add")
    public ResponseEntity<Car> add(@RequestBody Car cars) {
        try {
            carService.addCar(cars);
            return new ResponseEntity<>(cars, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Car>> all() {
        try {
            List<Car> carsList = carService.findAll();
            if (carsList.isEmpty()) {
                return new ResponseEntity<>(carsList, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(carsList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Car> findById(@PathVariable Long id) {
        Car cars = carService.find(id);
        if (cars != null) {
            return new ResponseEntity<>(cars, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Car> update(@PathVariable Long id, @RequestBody Car car) {
        Car existingCar = carService.find(id);
        if (existingCar != null) {
            carService.update(car);
            return new ResponseEntity<>(car, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        try {
            carService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
