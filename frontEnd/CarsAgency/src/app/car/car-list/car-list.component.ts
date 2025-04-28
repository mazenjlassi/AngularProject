import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { Car } from '../../models/car';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  standalone: false,
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  brands: Brand[] = [];
  constructor() {}

  ngOnInit(): void {
    // Example data — you can replace this with a real service call later
    const bmw: Brand = { id: 1, name: 'BMW', image: 'images/bmw2.png', cars: [] };
    const audi: Brand = { id: 2, name: 'Audi', image: 'assets/brands/audi.png', cars: [] };
    const mercedes: Brand = { id: 3, name: 'Mercedes', image: 'assets/brands/mercedes.png', cars: [] };

    this.cars = [
      {
        id: 1,
        img: 'images/bmw-i8.png',
        img2: 'images/bmw-i8.png',
        img3: 'images/bmw-i8.png',
        img4: 'images/bmw-i8.png',
        model: 'BMW i8',
        year: 2020,
        price: 140000,
        brand: bmw,
        horsepower: 362,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        color: 'Red',
        fuelEfficiency: 15.5,
        engineCapacity: 1998,
        speed: 250,
        seats: 4,
        fuelTankCapacity: 50,
        fuelConsumption: 10,
        acceleration: 3.5,
        topSpeed: 250,
        torque: 500,                
        savedByCustomers: [],
        purchasedByCustomers: []                    
      },
      {
        id: 2,
        img: 'images/audi-a7.png',    
        img2: 'images/audi-a7.png',
        img3: 'images/audi-a7.png',
        img4: 'images/audi-a7.png',
        model: 'Audi A7',
        year: 2019,
        price: 80000,
        brand: audi,
        horsepower: 362,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        color: 'Red',
        fuelEfficiency: 15.5,
        engineCapacity: 1998,
        speed: 250,
        seats: 4,
        fuelTankCapacity: 50,
        fuelConsumption: 10,
        acceleration: 3.5,
        topSpeed: 250,
        torque: 500,
        savedByCustomers: [],
        purchasedByCustomers: []  
      },
      {
        id: 3,
        img: '/images/mercedes-eqa.avif',
        img2: '/images/mercedes-eqa.avif',
        img3: '/images/mercedes-eqa.avif',
        img4: '/images/mercedes-eqa.avif',
        model: 'Mercedes EQA',
        year: 2021,
        price: 60000,
        brand: mercedes,
        horsepower: 362,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        color: 'Red',
        fuelEfficiency: 15.5,
        engineCapacity: 1998,
        speed: 250,
        seats: 4,
        fuelTankCapacity: 50,
        fuelConsumption: 10,
        acceleration: 3.5,
        topSpeed: 250,
        torque: 500,
        savedByCustomers: [],
        purchasedByCustomers: []
      }
    ];
  }
}
