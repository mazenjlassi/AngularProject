package com.example.carsagence.Repositories;

import com.example.carsagence.models.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository <Brand,Long> {
}
