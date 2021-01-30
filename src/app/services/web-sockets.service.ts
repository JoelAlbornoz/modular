import { Injectable, ɵɵresolveBody } from '@angular/core';
import {io} from 'socket.io-client'


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  
  url='https://modular-0-0-1.glitch.me/';
   socket = io(this.url, {
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd"
    }});
  constructor() { 
 //inicialización
    this.socket.on('connect', ()=>{
      console.log("conectado")}
      )
  }
  //fin del constructor 
}
