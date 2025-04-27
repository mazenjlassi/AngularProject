import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  standalone: false,
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(cars => {
      this.cars = cars;
      console.log(this.cars);
    });
  }

}
