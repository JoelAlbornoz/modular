import { Component, OnInit, Input } from '@angular/core';
import { Cell } from 'src/app/interfaces/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() item: Cell;
  constructor() { }

  ngOnInit(): void {
  }

}
