import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  isSpecial = false;
  numero = 0;
  link = "www.google.com";
  produtos = [ 
    {id: 1, nome: 'Arroz', preco: 4},
    {id: 2, nome: 'Feijao', preco: 7},
    {id: 3, nome: 'Massa', preco: 3},
    {id: 4, nome: 'Leite', preco: 5},
  ]


  constructor() { }

  ngOnInit(): void {
    this.numero = Math.floor(Math.random()*10)+1;
    console.log(this.numero);
  }

  incrementar() {
    this.numero++;
    this.isSpecial = true;
  }

}
