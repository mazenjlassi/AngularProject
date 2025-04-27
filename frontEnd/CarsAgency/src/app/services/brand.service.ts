import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'http://localhost:8080/brands'; // Base URL for your BrandRestController

  constructor(private http: HttpClient) {}

  // Add a new brand
  addBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(`${this.apiUrl}/add`, brand);
  }

  // Get all brands
  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${this.apiUrl}/all`);
  }

  // Find a brand by ID
  getBrandById(id: number): Observable<Brand> {
    return this.http.get<Brand>(`${this.apiUrl}/findById/${id}`);
  }

  // Update a brand
  updateBrand(id: number, brand: Brand): Observable<Brand> {
    return this.http.put<Brand>(`${this.apiUrl}/update/${id}`, brand);
  }

  // Delete a brand
  deleteBrand(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
