import { Injectable } from '@angular/core';
import { Brand } from './brand.service';
import { Customer } from './customer.service';


export interface Car {
  id: number;
  img: string;
  model: string;
  year: number;
  price: number;
  brand: Brand;
  savedByCustomers: Customer[];
  purchasedByCustomers: Customer[];
}

