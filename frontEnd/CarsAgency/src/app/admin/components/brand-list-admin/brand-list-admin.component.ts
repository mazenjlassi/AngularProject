import { Component } from '@angular/core';
import { Brand } from '../../../models/brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand-list-admin',
  standalone: false,
  templateUrl: './brand-list-admin.component.html',
  styleUrl: './brand-list-admin.component.css',
})
export class BrandListAdminComponent {
  brands: Brand[] | undefined ;


  constructor(private brandService: BrandService) {
    this.brandService.getAllBrands().subscribe(brands => {
      this.brands = brands;
      console.log(this.brands);
    });
  }

  editBrand(brand: Brand) {
    console.log('Edit brand:', brand);
    // you can navigate to edit form or open a modal
  }

  deleteBrand(brandId: number) {
    this.brandService.deleteBrand(brandId).subscribe(response => {
      console.log('Brand deleted:', response);
      this.brands = this.brands?.filter(b => b.id !== brandId);
    });
  }
}
