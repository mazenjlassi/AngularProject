import { Car } from "./car";
import { Customer } from "./customer";


export interface Purchase {
  id: number;
  customer: Customer;
  car: Car;
  quantity: number;
  purchaseDate: string;  // Format: 'YYYY-MM-DD'
}

