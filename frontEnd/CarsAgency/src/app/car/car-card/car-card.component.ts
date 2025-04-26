import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';

@Component({
  selector: 'app-car-card',
  standalone: false,
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.css'
})
export class CarCardComponent {
  @Input() car!: Car;

}
