import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Brand } from './brand';

export interface Car {
  id?: number;
  img: string;
  img2: string;
  img3: string;
  img4: string;
  model: string;
  year: number;
  price: number;
  brand: Brand;
  horsepower?: number;
  fuelType?: string;
  transmission?: string;
  color?: string;
  fuelEfficiency?: number;
  engineCapacity?: number;
  speed?: number;
  seats?: number;
  fuelTankCapacity?: number;
  fuelConsumption?: number;
  acceleration?: number;
  topSpeed?: number;
  torque?: number;
  savedByCustomers: Customer[];
  purchasedByCustomers: Customer[];
}

