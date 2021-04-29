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
  @Input() tamanho : number;
  @Input() colunas = [];
  @Input() dados = [];
  

  public dadosAtuais : Array<Array<String>>;
  public numPaginas : number = 1;
  public paginaAtual: number = 1;


  constructor() {
    
  }

  ngOnInit(): void {
    
    this.paginaAtual = 1;
    this.numPaginas = Math.ceil(this.dados.length/this.tamanho);
    this.dadosAtuais = new Array(this.numPaginas);
    var emptyData : Array<String> = new Array(this.colunas.length).fill("-");
    var k  = 0;
    for(var i = 0; i < this.numPaginas; i++){
      this.dadosAtuais[i] = new Array(this.tamanho);
      for(var j = 0; j < this.tamanho; j++){
        if(k < this.dados.length){
          this.dadosAtuais[i][j] = this.dados[k];
          k++;
        }else{
          this.dadosAtuais[i][j] = emptyData as unknown as any;
        }
      }
    }
  }

  mudarPagina(valor){
    if((valor + this.paginaAtual) < 1) this.paginaAtual = this.numPaginas;
    else if ((valor + this.paginaAtual) > this.numPaginas) this.paginaAtual = 1;
    else this.paginaAtual +=valor;
  }

  primeiro(){
    this.paginaAtual = 1;
  }

  ultimo(){
    this.paginaAtual = this.numPaginas;
  }

}
