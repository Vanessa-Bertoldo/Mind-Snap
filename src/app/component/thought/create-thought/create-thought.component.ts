import { Component, OnInit } from '@angular/core';
import { PensamentoServiceService } from '../../services/pensamento-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(){ //ocorre o registro do pensanmnto na API
    this.service.register(this.pensamento).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }

  cancel(){
    this.router.navigate(['/listagem'])
  }
}
