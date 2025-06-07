import { Component, Input } from '@angular/core';
import { Car } from '../../models/car';
import { Brand } from '../../models/brand';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomerService } from '../../services/customer.service';
@Component({
  selector: 'app-car-detail',
  standalone: false,
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {
  
  @Input() car!: Car;
  carId!: number;
  message = '';


 


selectedImage: string = '';

  constructor(private route: ActivatedRoute,private carService:CarService,private http: HttpClient,private customerService:CustomerService) {}

  ngOnInit(): void {
  
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCarById(id).subscribe(car => {
      this.car = car;
      this.selectedImage = this.car.img;
      console.log(this.car);
    });

  }

  selectImage(imageSrc: string) {
    this.selectedImage = imageSrc; // Update main image on click
  }
  saveCar() {
    const idCustomer = localStorage.getItem('id');
    this.carId = Number(this.route.snapshot.paramMap.get('id'));

    if (!idCustomer || !this.carId) {
      this.message = 'Car ID or Customer ID is missing.';
      console.error('Missing IDs:', { carId: this.carId, idCustomer });
      return;
    }

    const params = new HttpParams()
      .set('idCar', this.carId.toString())
      .set('idCustomer', idCustomer);

    this.http.post('http://localhost:8080/Customer/saveCars', null, { params, responseType: 'text' })
      .subscribe({
        next: response => {
          console.log('Success:', response);
          this.message = response;
        },
        error: err => {
          console.error('Error:', err);
          this.message = 'Error: ' + err.error;
        }
      });
  }
  


  purchaseCar() {
    const idCustomer = localStorage.getItem('id');
    this.carId = Number(this.route.snapshot.paramMap.get('id'));

    if (!idCustomer || !this.carId) {
      this.message = 'Car ID or Customer ID is missing.';
      console.error('Missing IDs:', { carId: this.carId, idCustomer });
      return;
    }

    const params = new HttpParams()
      .set('idCar', this.carId.toString())
      .set('idCustomer', idCustomer);

    this.http.post('http://localhost:8080/Customer/purchaseCars', null, { params, responseType: 'text' })
      .subscribe({
        next: response => {
          console.log('Success:', response);
          this.message = response;
        },
        error: err => {
          console.error('Error:', err);
          this.message = 'Error: ' + err.error;
        }
      });
  }


  }



