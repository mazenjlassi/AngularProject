import { Component } from '@angular/core';
import { Brand } from '../../models/brand';
import { Car } from '../../models/car';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-purchased-cars',
  standalone: false,
  templateUrl: './purchased-cars.component.html',
  styleUrl: './purchased-cars.component.css'
})
export class PurchasedCarsComponent {
    purchasedCars: Car[] = [
    {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_960_720.jpg',
    img2: '',
    img3: '',
    img4: '',
    model: 'Model S',
    year: 2022,
    price: 79999,
    brand: { id: 1, name: 'Tesla' } as Brand,
    savedByCustomers: [],
    purchasedByCustomers: [{ id: 1, fullName: 'Mazen Jlassi', phoneNumber: '', email: '', password: '', savedCars: [], purchasedCars: [] } as Customer]
    },
    {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg',
    img2: '',
    img3: '',
    img4: '',
    model: 'Mustang',
    year: 2021,
    price: 55999,
    brand: { id: 2, name: 'Ford' } as Brand,
    savedByCustomers: [],
    purchasedByCustomers: []
    }
    ];

}
