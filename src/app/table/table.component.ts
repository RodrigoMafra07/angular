import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  
  @Input() lancamentos: any;

  row = 3;

  maisRow() {
    if (this.row >= 20) {
      this.row = 20;
    } else {
      this.row++;
    }

  }
  menosRow() {
    if (this.row <= 1) {
      this.row = 1;
    } else {
      this.row--;
    }
  }


  

}
