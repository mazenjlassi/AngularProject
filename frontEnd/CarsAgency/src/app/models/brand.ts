import { Injectable } from '@angular/core';
import { Car } from './car';


export interface Brand {
  id: number;
  name: string;
  image: string;
  cars: Car[];
}

