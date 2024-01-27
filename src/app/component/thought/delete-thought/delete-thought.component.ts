import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';
import { PensamentoServiceService } from '../../services/pensamento-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service: PensamentoServiceService,
    private router: Router,
    private route: ActivatedRoute //fornecerá informações sobre as rotas dos cartões de pensamento. Aliado a outros métodos como snapshot e paramMap, conseguiremos informações sobre os cartões em momentos específicos.
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") ///snapshot — uma captura ou fotografia da rota no momento em que for acessada — e paramMap, que retorna um mapa com informações obrigatórias e opcionais do pensamento.
    this.service.searchId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  deleteThougth(){
    if(this.pensamento.id){
      this.service.delete(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listagem'])
      })
    }
  }

  cancelThougth(){
    this.router.navigate(['/listagem'])
  }

}
