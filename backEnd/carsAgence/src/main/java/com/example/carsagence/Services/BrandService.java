package com.example.carsagence.Services;

import com.example.carsagence.Repositories.BrandRepository;
import com.example.carsagence.models.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public Brand add(Brand brand) {
        return brandRepository.save(brand);
    }

    public Brand find(Long id) {
        return brandRepository.findById(id).get();
    }

    public void delete(Long id) {
        brandRepository.deleteById(id);
    }

    public Brand update(Brand brand) {
        return brandRepository.saveAndFlush(brand);
    }

    public List<Brand> findAll() {
        return brandRepository.findAll();
    }
}
