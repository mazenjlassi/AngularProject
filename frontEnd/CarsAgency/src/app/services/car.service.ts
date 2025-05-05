import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'http://localhost:8080/cars'; 

  constructor(private http: HttpClient) {}

  // Add a new car
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}/add`, car);
  }

  // Get all cars
  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/all`);
  }

  // Get a car by ID
  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/findById/${id}`);
  }

  // Update a car
  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/update/${id}`, car);
  }

  // Delete a car
  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
