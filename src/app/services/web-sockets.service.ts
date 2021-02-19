import { Injectable, ɵɵresolveBody, NgZone } from '@angular/core';
import * as io from 'socket.io-client'


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  state:any;
  url='https://modular-0-0-1.glitch.me/';
  socket : any;
  id : any;
  rows: any;
  


  spawn(){
    this.socket.emit('spawn')
  }

  move(dir){
    this.socket.emit('move', {
      dir: dir,
    })
  }
  constructor(private zone : NgZone) { 
 //inicialización
      this.socket = io(this.url);
      this.socket.on('connect', ()=>{
        console.log("conectado")
        })
        
      this.socket.on('sendState',(data)=>{
        this.state = data.estado;
        this.id = data.id;
        console.log(this.state)
        console.log('cargado')
      })
      this.socket.on('otro',(data)=>{
        console.log('cargado')
      })
  }
  //fin del constructor
  
  
}
