import { Car } from "./car.service";

export interface Customer {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  savedCars: Car[];
  purchasedCars: Car[];
}

