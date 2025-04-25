import { Injectable } from '@angular/core';
import { Car } from './car.service';


export interface Brand {
  id: number;
  name: string;
  cars: Car[];
}

