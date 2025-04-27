import { Component } from '@angular/core';
import { Brand } from '../../../models/brand';

@Component({
  selector: 'app-brand-list-admin',
  standalone: false,
  templateUrl: './brand-list-admin.component.html',
  styleUrl: './brand-list-admin.component.css',
})
export class BrandListAdminComponent {
  brands: Brand[] = [
    { id: 1, name: 'Toyota', image: 'assets/toyota.png', cars: [] },
    { id: 2, name: 'BMW', image: 'assets/bmw.png', cars: [] },
    { id: 3, name: 'Audi', image: 'assets/audi.png', cars: [] }
  ];

  editBrand(brand: Brand) {
    console.log('Edit brand:', brand);
    // you can navigate to edit form or open a modal
  }

  deleteBrand(brandId: number) {
    this.brands = this.brands.filter(b => b.id !== brandId);
  }
}
