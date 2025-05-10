import { Component } from '@angular/core';
import { Brand } from '../../../../models/brand';
import { Car } from '../../../../models/car';
import { CarService } from '../../../../services/car.service';
import { Router } from '@angular/router';
import { BrandService } from '../../../../services/brand.service';
import { UploadService } from '../../../../services/upload.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
  standalone: false,
})
export class CarFormComponent {
  constructor(
    private carService: CarService,
    private router: Router,
    private brandService: BrandService,
    private uploadService: UploadService
  ) {}

  brands: Brand[] = [];
  selectedFiles: File[] = [];
  previewUrls: (string | ArrayBuffer | null)[] = [];

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
    });
  }

  car: Car = {
    img: '',
    img2: '',
    img3: '',
    img4: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    brand: {} as Brand,
    horsepower: 0,
    fuelType: '',
    transmission: '',
    color: '',
    fuelEfficiency: 0,
    engineCapacity: 0,
    speed: 0,
    seats: 0,
    fuelTankCapacity: 0,
    fuelConsumption: 0,
    acceleration: 0,
    topSpeed: 0,
    torque: 0,
    savedByCustomers: [],
    purchasedByCustomers: [],
  };

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      // Clear previous selections
      this.selectedFiles = [];
      this.previewUrls = [];

      // Limit to 4 images (based on your model)
      const fileCount = Math.min(files.length, 4);

      for (let i = 0; i < fileCount; i++) {
        const file = files[i];
        this.selectedFiles.push(file);

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewUrls.push(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  async submitCar() {
    try {
      // Upload images sequentially
      if (this.selectedFiles.length > 0) {
        this.car.img = await this.uploadService.uploadImage(this.selectedFiles[0]).toPromise() ?? '';
      }
      if (this.selectedFiles.length > 1) {
        this.car.img2 = await this.uploadService.uploadImage(this.selectedFiles[1]).toPromise() ?? '';
      }
      if (this.selectedFiles.length > 2) {
        this.car.img3 = await this.uploadService.uploadImage(this.selectedFiles[2]).toPromise() ?? '';
      }
      if (this.selectedFiles.length > 3) {
        this.car.img4 = await this.uploadService.uploadImage(this.selectedFiles[3]).toPromise() ?? '';
      }

      // Set brand
      const selectedBrand = this.brands.find((b) => b.id === this.car.brand.id);
      if (selectedBrand) {
        this.car.brand = selectedBrand;
      }

      // Submit car
      this.carService.addCar(this.car).subscribe(
        (response) => {
          alert('Car added successfully');
          this.router.navigate(['/admin/car-management']);
        },
        (error) => {
          alert('Car adding failed');
          console.error('Error adding car:', error);
        }
      );
    } catch (error) {
      alert('Error uploading images');
      console.error('Error:', error);
    }
  }

  removeImage(index: number) {
    this.selectedFiles.splice(index, 1);
    this.previewUrls.splice(index, 1);
  }
}