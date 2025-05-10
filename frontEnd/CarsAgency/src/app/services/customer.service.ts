import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080/customers'; // Base URL for your BrandRestController

  constructor(private http: HttpClient) {}

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/add`, customer);
  }

  getSavedCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/saved-cars`);
  }

  getPurchasedCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/purchased-cars`);
  }
}