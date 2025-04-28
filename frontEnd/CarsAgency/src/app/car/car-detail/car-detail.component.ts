import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';
import { Brand } from '../../models/brand';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  standalone: false,
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {
  car!: Car;
 
selectedImage: string = '';
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));



    // Simulate fetching car by id — you should replace this later with a real service
    const bmw: Brand = { id: 1, name: 'BMW', image: 'images/bmw.png', cars: [] };
    const audi: Brand = { id: 2, name: 'Audi', image: 'images/audi.png', cars: [] };
    const mercedes: Brand = { id: 3, name: 'Mercedes', image: 'images/mercedes.png', cars: [] };

    const cars: Car[] = [
      { id: 1,
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
          purchasedByCustomers: [] },
      {  id: 2,
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
          purchasedByCustomers: [] },
      { id: 3,
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
          purchasedByCustomers: [] }
    ];

    

    
        this.car = cars.find(c => c.id === id)!;
        this.selectedImage = this.car.img; // Default to first image
  }

  selectImage(imageSrc: string) {
    this.selectedImage = imageSrc; // Update main image on click
  }
    

  }

 

