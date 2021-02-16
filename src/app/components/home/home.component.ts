import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-sockets.service';
import { FetchService } from '../../services/fetch.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  },
})
export class HomeComponent implements OnInit {
  blocksColumn: number;
  blocksRow: number;
  rows;
  state:any
  datos = 0;
  socket : any;
  constructor(private fetch : FetchService, public webSocketService: WebSocketService) { 
    this.socket = webSocketService
  }

  ngOnInit(): void {
    this.fetch.conectar()
  }
  obtenerEstilos(){
    return {'width': (50/this.webSocketService.state.grilla.length ) +'vw',
            'height': (50/this.webSocketService.state.grilla[0].length ) +'vh' }
  }
  sendChange(j, i, datos){
  //Enviar un evento de cambio al servidor, esperar feedback a travéz del servicio
   console.log('ocurrió un cambio') 
  }

  //Escucha los eventos del teclado
  handleKeyboardEvent(event: any) {
    this.checkKey(event)
  }
  checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '13') {
      console.log(this.webSocketService.rows)
    }
    else if (e.keyCode == '38') {
      // up arrow
      console.log('up')
    }
    else if (e.keyCode == '40') {
      // down arrow
      console.log('down')
    }
    else if (e.keyCode == '37') {
      // left arrow
      console.log('left')
    }
    else if (e.keyCode == '39') {
      console.log('right')

    }
  }
}
