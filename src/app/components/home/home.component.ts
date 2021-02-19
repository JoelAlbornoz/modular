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
  obtenerEstilos(i, j){
    return {'width': (50/this.socket.state.grilla.length ) +'vw',
            'height': (50/this.socket.state.grilla[0].length ) +'vh',
            'background-color': 'gray',
            'margin':'0px',
            'padding': '0px',
            'position': 'absolute',
            'left': (i*(50/this.socket.state.grilla.length)) +'vw',
            'top' : (j*(50/this.socket.state.grilla[0].length)) +'vh',
            'border' : 'solid black 1px'
          }
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
      console.log(this.webSocketService.state.grilla)
    }
    else if (e.keyCode == '38') {
      // up arrow
      console.log('up')
      this.webSocketService.move('up')
    }
    else if (e.keyCode == '40') {
      // down arrow
      console.log('down')
      this.webSocketService.move('down')
    }
    else if (e.keyCode == '37') {
      // left arrow
      console.log('left')
      this.webSocketService.move('left')
    }
    else if (e.keyCode == '39') {
      console.log('right')
      this.webSocketService.move('right')
    }
  }
}
