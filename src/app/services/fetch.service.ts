import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) {}
   
  conectar(){
    console.log('comenzando')
    this.http.get("https://modular-0-0-1.glitch.me/ping").subscribe((response)=> {console.log(response)
    console.log("finalizado")
  })
  }


}
