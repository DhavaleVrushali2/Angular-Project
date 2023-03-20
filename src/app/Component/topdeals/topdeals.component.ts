import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServicesService } from 'src/app/core/services.service';

@Component({
  selector: 'app-topdeals',
  templateUrl: './topdeals.component.html',
  styleUrls: ['./topdeals.component.css']
})

export class TopdealsComponent implements OnInit{
   Data:any[]=[]
  constructor(private ser:ServicesService){

  
  }
  ngOnInit(): void {
    this.topdeals()
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  topdeals(){
this.ser.getDataFromdatabase("top-deals").subscribe((el:any)=>{
this.Data=el
console.log(el)
})
  }
}
