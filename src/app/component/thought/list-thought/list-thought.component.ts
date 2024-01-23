import { PensamentoServiceService } from './../../services/pensamento-service.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listPensamento : Pensamento[] = []

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoServiceService) { }

  ngOnInit(): void {
    let list = this.service.listing()
    console.log("LISTAR ", list)
  }

}
