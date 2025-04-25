package com.carsagency.Repositories;

import com.carsagency.models.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository <Brand,Long> {
}
