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
    
}
}
