import { Component } from '@angular/core';
import { Brand } from '../../../../models/brand';
import { Car } from '../../../../models/car';

@Component({
  selector: 'app-car-form',
  standalone: false,
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {


  car: Car = {
    id: 0,
    img: '',
    img2: '',
    img3: '',
    img4: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    brand: {} as Brand,
    horsepower: 0,
    fuelType: '',
    transmission: '',
    color: '',
    fuelEfficiency: 0,
    engineCapacity: 0,
    speed: 0,
    seats: 0,
    fuelTankCapacity: 0,
    fuelConsumption: 0,
    acceleration: 0,
    topSpeed: 0,
    torque: 0,
    savedByCustomers: [],
    purchasedByCustomers: []
  };

  brands: Brand[] = [
    { id: 1, name: 'BMW', image: 'images/bmw2.png', cars: [] },
    { id: 2, name: 'Audi', image: 'assets/brands/audi.png', cars: [] },
    { id: 3, name: 'Mercedes', image: 'assets/brands/mercedes.png', cars: [] }
  ];

  submitCar() {
    console.log('Car submitted:', this.car);
    // Here you can send the car object to a service or backend
  }
}
