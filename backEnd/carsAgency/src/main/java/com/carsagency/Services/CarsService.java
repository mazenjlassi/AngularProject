package com.carsagency.Services;


import com.carsagency.Repositories.CarsRepository;
import com.carsagency.models.Cars;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarsService {
    @Autowired
    private CarsRepository carsRepository;

    public Cars add(Cars cars ){return carsRepository.save(cars);}

    public Cars find(Long id){return  carsRepository.findById(id).get();}

    public void delete(Long id){carsRepository.deleteById(id);}

    public Cars update(Cars cars) { return carsRepository.saveAndFlush(cars); }

    public List<Cars> findAll() { return carsRepository.findAll(); }




}
