import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { BrandFormComponent } from './admin/components/brand-form/brand-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'brands', component: BrandListComponent},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarDetailComponent},
  {path: 'admin/brands/new', component: BrandFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
