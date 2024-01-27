import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';
import { PensamentoServiceService } from '../../services/pensamento-service.service';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listPensamento : Pensamento[] = []

  constructor(private service: PensamentoServiceService) { }

  ngOnInit(): void {
    this.service.listing().subscribe((list) => {
      this.listPensamento = list
    })
  }

}
