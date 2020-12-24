import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})

@NgModule({
   imports: [],
   exports: [TodoHeaderComponent],
   declarations: [TodoHeaderComponent],
   providers: [],
})

export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
