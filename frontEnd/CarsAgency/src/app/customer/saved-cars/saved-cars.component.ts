import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-saved-cars',
  standalone: false,
  templateUrl: './saved-cars.component.html',
  styleUrl: './saved-cars.component.css'
})
export class SavedCarsComponent {
  savedCars: Car[] = [];
  customerId!: number;

  constructor(private http: HttpClient,private customerService:CustomerService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    if (id) {
      this.customerId = +id;
      this.loadSavedCars();
    } else {
      console.error('Customer ID not found in localStorage');
    }
  }

  loadSavedCars() {
    const params = new HttpParams().set('customerId', this.customerId);
    this.http.get<Car[]>(`http://localhost:8080/Customer/SavedCars/${this.customerId}`)
          .subscribe({
        next: data => this.savedCars = data,
        error: err => console.error('Error fetching saved cars:', err)
      });
  }

  
}