package com.carsagency.RestControllers;


import com.carsagency.Services.BrandService;
import com.carsagency.models.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/brands")
public class BrandRestController {

    @Autowired
    private BrandService brandService;

    @PostMapping("/add")
    public ResponseEntity<Brand> add(@RequestBody Brand brand) {
        try {
            brandService.add(brand);
            return new ResponseEntity<>(brand, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Brand>> all() {
        try {
            List<Brand> brandList = brandService.findAll();
            if (brandList.isEmpty()) {
                return new ResponseEntity<>(brandList, HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(brandList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Brand> findById(@PathVariable Long id) {
        Brand brand = brandService.find(id);
        if (brand != null) {
            return new ResponseEntity<>(brand, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Brand> update(@PathVariable Long id, @RequestBody Brand brand) {
        Brand existingBrand = brandService.find(id);
        if (existingBrand != null) {
            brandService.update(brand);
            return new ResponseEntity<>(brand, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
        try {
            brandService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
