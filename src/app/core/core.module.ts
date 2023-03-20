import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignInComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
