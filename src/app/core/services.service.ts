import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../Component/topdeals/Environment/environment';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  httpHeaders:HttpHeaders=new HttpHeaders()
  .set("content-type","application/json")
  baseUrl:string=environment.baseUrl
    constructor(private http:HttpClient) { 

    }

  getDataFromdatabase(endpoint:any){
      let url=this.baseUrl+endpoint
    return this.http.get(url,{headers: this.httpHeaders})
  }
}
