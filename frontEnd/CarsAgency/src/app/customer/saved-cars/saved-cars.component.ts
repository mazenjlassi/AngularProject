import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { Brand } from '../../models/brand';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-saved-cars',
  standalone: false,
  templateUrl: './saved-cars.component.html',
  styleUrl: './saved-cars.component.css'
})
export class SavedCarsComponent implements OnInit {
  savedCars: Car[] = [];

  ngOnInit(): void {
    const brand1: Brand = { id: 1, name: 'Toyota', image: '' };
    const customer: Customer = { id: 1, fullName: 'John Doe', email: '', password: '', phoneNumber: '', savedCars: [], purchasedCars: [] };

    this.savedCars = [
      {
        id: 1,
        img: 'https://example.com/camry.jpg',
        img2: '', img3: '', img4: '',
        model: 'Camry',
        year: 2023,
        price: 27000,
        brand: brand1,
        horsepower: 203,
        fuelType: 'Gasoline',
        transmission: 'Automatic',
        color: 'Blue',
        fuelEfficiency: 30,
        engineCapacity: 2.5,
        speed: 120,
        seats: 5,
        fuelTankCapacity: 15.8,
        fuelConsumption: 7.5,
        acceleration: 8.2,
        topSpeed: 210,
        torque: 184,
        savedByCustomers: [customer],
        purchasedByCustomers: []
      }
    ];

}
}
