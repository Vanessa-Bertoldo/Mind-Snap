import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listPensamento = [
    {
      conteudo: "To tentando",
      autoria: "Vanessa Bert",
      modelo: "modelo3"
    },
    {
      conteudo: "To tentando",
      autoria: "Vanessa Bert",
      modelo: "modelo3"
    },
    {
      conteudo: "To tentando",
      autoria: "Vanessa Bert",
      modelo: "modelo3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
