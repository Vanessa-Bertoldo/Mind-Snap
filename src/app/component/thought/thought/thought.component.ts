import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  pensamento = {
    conteudo: "To tentando",
    autoria: "Vanessa Bert",
    modelo: "modelo3"
  }

  listPensamento = [
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
