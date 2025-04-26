import { Car } from "./car";

export interface Customer {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  savedCars: Car[];
  purchasedCars: Car[];
}

