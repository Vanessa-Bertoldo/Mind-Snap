import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from '../thought/thought';

//As services guardam a lógica de comunicação com o backend

@Injectable({
  providedIn: 'root' //indica a disponibilidade de utilização ou injeção desta classe por toda a aplicação
})
export class PensamentoServiceService {
  private readonly API = "http://localhost:3000/"
  //A injeção de dependencias é feita via construtor
  //Injeção de dependências é um padrão de projeto no qual uma classe solicita dependências externas ao invés de criá-las
  constructor(private http: HttpClient) { }

  listing(){
    return this.http.get<Pensamento>(this.API);
  }
}
