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
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Simulate fetching car by id — you should replace this later with a real service
    const bmw: Brand = { id: 1, name: 'BMW', image: 'images/bmw.png', cars: [] };
    const audi: Brand = { id: 2, name: 'Audi', image: 'images/audi.png', cars: [] };
    const mercedes: Brand = { id: 3, name: 'Mercedes', image: 'images/mercedes.png', cars: [] };

    const cars: Car[] = [
      { id: 1, img: 'images/bmw-i8.png', model: 'BMW i8', year: 2020, price: 140000, brand: bmw, savedByCustomers: [], purchasedByCustomers: [] },
      { id: 2, img: 'images/audi-a7.jpg', model: 'Audi A7', year: 2019, price: 80000, brand: audi, savedByCustomers: [], purchasedByCustomers: [] },
      { id: 3, img: 'images/mercedes-eqa.jpg', model: 'Mercedes EQA', year: 2021, price: 60000, brand: mercedes, savedByCustomers: [], purchasedByCustomers: [] }
    ];

    this.car = cars.find(c => c.id === id)!;
  }

 
}
