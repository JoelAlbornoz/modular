import { Injectable, ɵɵresolveBody } from '@angular/core';
import * as io from 'socket.io-client'


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  
  url='https://modular-0-0-1.glitch.me/';
   socket : any;
   elementsGroup:any = [];
   id : any;
   htmlEls =[]
   messages= [{nombre:'administrador', mensaje:'intenta moverte con las flechas'},{nombre:'administrador', mensaje:'puedes comprar elementos html con tus puntos'}]
   puntos=0;


    
  constructor() { 
 //inicialización
      this.socket = io(this.url);
      this.socket.on('connect', ()=>{
        console.log("conectado")
        })
  }
  //fin del constructor 
}
