import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() titulo : String;
  @Input() subtitulo : String;
  @Input() legenda : String;
  @Input() tamanho = 5;
  @Input() colunas = [];
  @Input() dados = [];

  constructor() { }

  ngOnInit(): void {
  }

}
