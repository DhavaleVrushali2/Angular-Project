import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { MedicineComponent } from './Component/medicine/medicine.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"medicine",component:MedicineComponent},
{path:"", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
