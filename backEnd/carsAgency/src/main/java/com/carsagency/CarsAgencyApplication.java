package com.carsagency;

import com.carsagency.models.Cars;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarsAgencyApplication {


	public static void main(String[] args) {
		Cars cars = new Cars();
		cars.setModel("peugeot 206");
		System.out.println(cars.getModel());
		SpringApplication.run(CarsAgencyApplication.class, args);
	}


}
