package com.carsagency.Services;


import com.carsagency.Repositories.BrandRepository;
import com.carsagency.Repositories.CarRepository;
import com.carsagency.models.Brand;
import com.carsagency.models.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    @Autowired
    private BrandRepository brandRepository; // inject brand repo

    public Car addCar(Car car) {
        // Fetch the real Brand entity
        if (car.getBrand() != null && car.getBrand().getId() != null) {
            Brand brand = brandRepository.findById(car.getBrand().getId())
                    .orElseThrow(() -> new RuntimeException("Brand not found with ID: " + car.getBrand().getId()));
            car.setBrand(brand);
        } else {
            car.setBrand(null);
        }
        return carRepository.save(car);
    }

    public Car add(Car car ){return carRepository.save(car);}

    public Car find(Long id){return  carRepository.findById(id).get();}

    public void delete(Long id){carRepository.deleteById(id);}

    public Car update(Car cars) { return carRepository.saveAndFlush(cars); }

    public List<Car> findAll() { return carRepository.findAll(); }




}
