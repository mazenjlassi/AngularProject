import { Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';


@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
  standalone: false,
})
export class BrandListComponent implements OnInit {

  brands: Brand[] = [
    { id: 1, name: 'BMW', image: 'images/bmw2.png', cars: [] },
    { id: 2, name: 'Audi', image: 'images/audi.png', cars: [] },
    { id: 3, name: 'Mercedes', image: 'images/mercedes.png', cars: [] },
    { id: 4, name: 'Volkswagen', image: 'images/volkswagen.png', cars: [] },
    
    
  
    // Add more brands if you want
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
