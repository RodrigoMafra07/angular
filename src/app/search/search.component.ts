import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Input() search: any;

  pesquisar:"";

  filtro(){
    if(this.pesquisar == this.search.descricao){

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
