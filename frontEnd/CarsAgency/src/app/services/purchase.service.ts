import { Car } from "./car.service";
import { Customer } from "./customer.service";

export interface Purchase {
  id: number;
  customer: Customer;
  car: Car;
  quantity: number;
  purchaseDate: string;  // Format: 'YYYY-MM-DD'
}

