import { Component } from '@angular/core';
import { Brand } from '../../../../models/brand';
import { Car } from '../../../../models/car';
import { CarService } from '../../../../services/car.service';
import { RedirectCommand, Router } from '@angular/router';
import { BrandService } from '../../../../services/brand.service';

@Component({
  selector: 'app-car-form',
  standalone: false,
  templateUrl:'./car-form.component.html',
  styleUrl: './car-form.component.css',
})
export class CarFormComponent {
  constructor(private carService: CarService, private router: Router,private brandService:BrandService) {}

  brands: Brand[] = [];

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
      console.log(this.brands);
    });
  }

  car: Car = {
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
    purchasedByCustomers: [],
  };



  submitCar() {
    const selectedBrand = this.brands.find(b => b.id === this.car.brand.id);
    if (selectedBrand) {
      this.car.brand = selectedBrand;
    }

    console.log('Car submitted:', this.car);
    this.carService.addCar(this.car).subscribe(
      (response) => {
        console.log('Car added successfully:', response);
        alert('Car added successfully');
        this.router.navigate(['/admin/car-management']);
      },
      (error) => {
        alert('Car adding failed');
        console.error('Error adding car:', error);
      }
    );
  }

}
