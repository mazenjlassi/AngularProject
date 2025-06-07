import { Component } from '@angular/core';
import { Brand } from '../../models/brand';
import { Car } from '../../models/car';
import { Customer } from '../../models/customer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-purchased-cars',
  standalone: false,
  templateUrl: './purchased-cars.component.html',
  styleUrl: './purchased-cars.component.css'
})
export class PurchasedCarsComponent {
  purchasedCars: Car[] = [];
  customerId!: number;

  constructor(private http: HttpClient,private customerService:CustomerService) {}

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    if (id) {
      this.customerId = +id;
      this.loadPurchasedCars();
    } else {
      console.error('Customer ID not found in localStorage');
    }
  }

  loadPurchasedCars() {
    const params = new HttpParams().set('customerId', this.customerId);
    this.http.get<Car[]>(`http://localhost:8080/Customer/PurchasedCars/${this.customerId}`)
          .subscribe({
        next: data => this.purchasedCars = data,
        error: err => console.error('Error fetching purchased cars:', err)
      });
  }

  
}
