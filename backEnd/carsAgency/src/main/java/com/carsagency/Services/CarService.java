package com.carsagency.Services;


import com.carsagency.Repositories.CarRepository;
import com.carsagency.models.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    public Car add(Car car ){return carRepository.save(car);}

    public Car find(Long id) {
        return carRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Car with ID " + id + " not found"));
    }

    public void delete(Long id){carRepository.deleteById(id);}

    public Car update(Car cars) { return carRepository.saveAndFlush(cars); }

    public List<Car> findAll() { return carRepository.findAll(); }

    public List<Car> SavedCar(Long id)
    {
        return carRepository.findCarsBySavedByCustomers_Id(id);
    }




}
