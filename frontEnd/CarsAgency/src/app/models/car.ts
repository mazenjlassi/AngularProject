import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Brand } from './brand';

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

