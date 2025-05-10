import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:8080/Customer';

  constructor(private http: HttpClient) { }

  register(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/Signup`, customer);
  }

  login(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/Login`, customer).pipe(
      tap(response => {
        localStorage.setItem('id', response.id.toString());
        localStorage.setItem('userName', response.fullName)
      }));
  }
}
