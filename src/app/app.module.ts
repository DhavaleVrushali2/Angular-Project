import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './Component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CoreModule } from './core/core.module';
import { MedicineComponent } from './Component/medicine/medicine.component';
import { TopdealsComponent } from './Component/topdeals/topdeals.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './core/Component/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
       MedicineComponent,
       TopdealsComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    SignInComponent
  ],
  providers: [],
  exports:[
 SignInComponent
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
