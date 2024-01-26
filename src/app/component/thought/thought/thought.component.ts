import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Pensamento } from '../thought';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {
  //A notação Input serve para passarmos informações do componente pai "listarPensamento" para o componente "filho" pensamento
  @Input() pensamento = {
    conteudo: "To tentando",
    autoria: "Vanessa Bert",
    modelo: "modelo3"
  }

  listPensamento : Pensamento[] = [
    {
      id: 0,
      conteudo: "To tentando",
      autoria: "Vanessa Bert",
      modelo: "modelo3"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento() : string {
    if(this.pensamento.conteudo.length > 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
