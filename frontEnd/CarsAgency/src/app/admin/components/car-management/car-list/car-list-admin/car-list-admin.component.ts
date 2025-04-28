import { Component } from '@angular/core';
import { Brand } from '../../../../../models/brand';
import { Car } from '../../../../../models/car';

@Component({
  selector: 'app-car-list-admin',
  standalone: false,
  templateUrl: './car-list-admin.component.html',
  styleUrl: './car-list-admin.component.css'
})
export class CarListAdminComponent {

  cars: Car[] = [];

  brands: Brand[] = [
    { id: 1, name: 'BMW', image: 'images/bmw2.png', cars: [] },
    { id: 2, name: 'Audi', image: 'assets/brands/audi.png', cars: [] },
    { id: 3, name: 'Mercedes', image: 'assets/brands/mercedes.png', cars: [] }
  ];

  constructor() {
    this.loadCars();
  }

  loadCars() {
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
        brand: this.brands[0],
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
      // You can add more cars here
    ];
  }

  addCar() {
    // Here you can navigate to the car-form page or open a modal
    console.log('Redirecting to add car form...');
  }

  editCar(car: Car) {
    // Here you can navigate to the edit page or open a form pre-filled with car data
    console.log('Editing car:', car);
  }

  deleteCar(carId: number) {
    this.cars = this.cars.filter(car => car.id !== carId);
    console.log('Deleted car with id:', carId);
  }
}
