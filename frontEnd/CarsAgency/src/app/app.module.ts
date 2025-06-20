import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { CarDetailComponent } from './car/car-detail/car-detail.component';
import { CarCardComponent } from './car/car-card/car-card.component';
import { BrandFormComponent } from './admin/components/brand-form/brand-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandListAdminComponent } from './admin/components/brand-list-admin/brand-list-admin.component';
import { CarFormComponent } from './admin/components/car-management/car-form/car-form.component';
import { CarListAdminComponent } from './admin/components/car-management/car-list/car-list-admin/car-list-admin.component';
import { SavedCarsComponent } from './customer/saved-cars/saved-cars.component';
import { PurchasedCarsComponent } from './customer/purchased-cars/purchased-cars.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BrandListComponent,
    CarListComponent,
    CarDetailComponent,
    CarCardComponent,

    BrandFormComponent,
    BrandListAdminComponent,
    CarFormComponent,
    CarListAdminComponent,
    SavedCarsComponent,
    PurchasedCarsComponent,
    LoginComponent,
    SignupComponent,
    CapitalizePipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
