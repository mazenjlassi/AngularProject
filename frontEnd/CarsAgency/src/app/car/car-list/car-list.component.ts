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
        model: 'BMW i8',
        year: 2020,
        price: 140000,
        brand: bmw,
        savedByCustomers: [],
        purchasedByCustomers: []
      },
      {
        id: 2,
        img: 'assets/cars/audi-a7.jpg',
        model: 'Audi A7',
        year: 2019,
        price: 80000,
        brand: audi,
        savedByCustomers: [],
        purchasedByCustomers: []
      },
      {
        id: 3,
        img: 'assets/cars/mercedes-eqa.jpg',
        model: 'Mercedes EQA',
        year: 2021,
        price: 60000,
        brand: mercedes,
        savedByCustomers: [],
        purchasedByCustomers: []
      }
    ];
  }
}
