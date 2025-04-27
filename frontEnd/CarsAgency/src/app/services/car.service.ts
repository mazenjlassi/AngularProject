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


  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.apiUrl}/add`, car);
  }


  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/all`);
  }


  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/findById/${id}`);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/update/${id}`, car);
  }


  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
