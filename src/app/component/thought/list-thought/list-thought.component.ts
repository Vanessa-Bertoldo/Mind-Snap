import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../thought';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {

  listPensamento : Pensamento[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
