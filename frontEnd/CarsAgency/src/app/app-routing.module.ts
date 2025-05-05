import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { BrandFormComponent } from './admin/components/brand-form/brand-form.component';
import { BrandListAdminComponent } from './admin/components/brand-list-admin/brand-list-admin.component';
import { CarFormComponent } from './admin/components/car-management/car-form/car-form.component';
import { CarListAdminComponent } from './admin/components/car-management/car-list/car-list-admin/car-list-admin.component';
import { SavedCarsComponent } from './customer/saved-cars/saved-cars.component';
import { PurchasedCarsComponent } from './customer/purchased-cars/purchased-cars.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'brands', component: BrandListComponent},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarDetailComponent},
  {path: 'admin/brands/new', component: BrandFormComponent},
  {path: 'admin/brands',component:BrandListAdminComponent},
  {path: 'admin/car/new',component:CarFormComponent},
  {path: 'admin/cars',component:CarListAdminComponent},
  {path: 'customer/saved-cars', component: SavedCarsComponent},
  {path: 'customer/purchased-cars', component: PurchasedCarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
