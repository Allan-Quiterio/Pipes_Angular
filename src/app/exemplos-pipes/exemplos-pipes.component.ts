import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss'],
})
export class ExemplosPipesComponent implements OnInit {
  livro = {
    titulo: 'Aprendendo Estrutura de Dados e Algoritmos em JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP',
  };

  cursos = ['Angular', 'JS'];

  filtro: string;

  addCurso(valor) {
    this.cursos.push(valor);
    console.log(this.cursos);
  }

  obterCurso() {
    if (
      this.cursos.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.cursos;
    }

    return this.cursos.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      } else {
        return false;
      }
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
