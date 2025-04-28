import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';


@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
  standalone: false,
})
export class BrandListComponent implements OnInit {

  brands: Brand[] | undefined ;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe(brands => {
      this.brands = brands;
      console.log(this.brands);
    });
  }

}
