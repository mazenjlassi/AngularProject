import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';
import { Brand } from '../../models/brand';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-detail',
  standalone: false,
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {
  car!: Car;

selectedImage: string = '';

  constructor(private route: ActivatedRoute,private carService:CarService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id).subscribe(car => {
      this.car = car;
      this.selectedImage = this.car.img;
      console.log(this.car);
    });

  }

  selectImage(imageSrc: string) {
    this.selectedImage = imageSrc; // Update main image on click
  }


  }



