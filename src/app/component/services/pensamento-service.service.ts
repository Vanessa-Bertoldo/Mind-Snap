import { Injectable } from '@angular/core';

//As services guardam a lógica de comunicação com o backend

@Injectable({
  providedIn: 'root' //indica a disponibilidade de utilização ou injeção desta classe por toda a aplicação
})
export class PensamentoServiceService {

  constructor() { }
}
