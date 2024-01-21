import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listPensamento = [
    {
      conteudo: "filho",
      autoria: "Vanessa Bert",
      modelo: "modelo3"
    },
    {
      conteudo: "filhos",
      autoria: "Vanessa Bert",
      modelo: "modelo2"
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',      autoria: "Vanessa Bert",
      modelo: "modelo3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
