import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-sockets.service';
import { FetchService } from '../../services/fetch.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blocksColumn: number = 6;
  blocksRow: number = 6;
  rows;
  datos = 0;
  constructor(private fetch : FetchService, private WebSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.fetch.conectar()
    this.rows = Array(this.blocksRow).fill(Array(this.blocksColumn).fill({contents: {entities:['Entidad', 'FK'], objects:[], players: []}},0),0)
  }
  obtenerEstilos(){
    return {'width': (50/this.blocksColumn ) +'vw',
            'height': (50/this.blocksRow ) +'vh' }
  }
  sendChange(j, i, datos){
  //Enviar un evento de cambio al servidor, esperar feedback a travéz del servicio
   console.log('ocurrió un cambio') 
  }
}
