import { Component } from '@angular/core';
import { Brand } from '../../../../../models/brand';
import { Car } from '../../../../../models/car';
import { BrandService } from '../../../../../services/brand.service';
import { CarService } from '../../../../../services/car.service';

@Component({
  selector: 'app-car-list-admin',
  standalone: false,
  templateUrl: './car-list-admin.component.html',
  styleUrl: './car-list-admin.component.css'
})
export class CarListAdminComponent {

  cars: Car[] = [];

  brands: Brand[] = [];

  constructor(private brandService: BrandService, private carService: CarService) {
    this.loadCars();
  }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
      console.log(this.brands);
    });
  }

  loadCars() {
    this.carService.getAllCars().subscribe((cars) => {
      if (cars) {
      this.cars = cars;}
      console.log(this.cars);
    });
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
    if (this.cars) {
    this.cars = this.cars.filter(car => car.id !== carId);
    console.log('Deleted car with id:', carId);}
  }
}
