import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'tabela-paginada';

  public lista1 = [['Maria', '28', 'Belo Horizonte', 'Pará de Minas'], ['Claudio', '26', 'São Paulo', 'São Paulo'], ['Sandro', '34', 'Niterói', 'Rio de Janeiro', 'teste']]
  public campos1 = ['Nome', 'Idade', 'Cidade Atual', 'Cidade do Nascimento'];

  public lista2 = [['Maria', '28', 'Belo Horizonte', 'Pará de Minas'], ['Claudio', '26', 'São Paulo', 'São Paulo'], ['Sandro', '34', 'Niterói', 'Rio de Janeiro'],
  ['Luzia', '28', 'Belo Horizonte', 'Pará de Minas'], ['Otavio', '32', 'São Paulo', 'São Paulo'], ['Sandro', '34', 'Niterói', 'Rio de Janeiro'],
  ['Sinead', '28', 'Belo Horizonte', 'Pará de Minas'], ['Matheus', '35', 'São Paulo', 'São Paulo'], ['Alice', '34', 'Niterói', 'Rio de Janeiro']];


  public legenda = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


}
