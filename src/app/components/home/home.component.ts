import { Component, OnInit } from '@angular/core';
import { FetchService } from '../../services/fetch.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private fetch : FetchService) { }

  ngOnInit(): void {
    this.fetch.conectar()
  }

}
