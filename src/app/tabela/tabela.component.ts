import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() titulo: String;
  @Input() subtitulo: String;
  @Input() legenda: String;
  @Input() tamanho: number;
  @Input() colunas = [];
  @Input() dados = [];


  public dadosAtuais: Array<Array<String>>;
  public numPaginas: number = 1;
  public paginaAtual: number = 1;
  public menuInferior: number[];


  constructor() {

  }

  ngOnInit(): void {

    this.paginaAtual = 1;
    this.numPaginas = Math.ceil(this.dados.length / this.tamanho);
    this.dadosAtuais = new Array(this.numPaginas);
    var emptyData: Array<String> = new Array(this.colunas.length).fill("-");
    var k = 0;
    for (var i = 0; i < this.numPaginas; i++) {
      this.dadosAtuais[i] = new Array(this.tamanho);
      for (var j = 0; j < this.tamanho; j++) {
        if (k < this.dados.length) {
          this.dadosAtuais[i][j] = this.dados[k];
          k++;
        } else {
          this.dadosAtuais[i][j] = emptyData as unknown as any;
        }
      }
    }
    this.gerarVetor();
  }

  mudarPagina(valor) {
    if ((valor + this.paginaAtual) < 1) this.paginaAtual = this.numPaginas;
    else if ((valor + this.paginaAtual) > this.numPaginas) this.paginaAtual = 1;
    else this.paginaAtual += valor;
    this.gerarVetor();
  }

  primeiro() {
    this.paginaAtual = 1;
    this.gerarVetor();
  }

  ultimo() {
    this.paginaAtual = this.numPaginas;
    this.gerarVetor();
  }

  goToPagina(value) {
    this.paginaAtual = value;
    this.gerarVetor();
  }

  gerarVetor() {
    this.menuInferior = [];
    var itemMax = 3;
    if(this.numPaginas%2 == 0) itemMax=4;
    for (var i = -2; i < itemMax; i++) {
      this.menuInferior.push(this.paginaAtual + i);
    }
  }
}
