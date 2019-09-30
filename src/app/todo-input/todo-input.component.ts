import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  constructor(private todo: TodoServiceService) { }

  ngOnInit() {
  }

  addItem(item) {
    if (item === "") {
      return;
    }
    else {
      this.todo.addTodo(item);
    }
  }

}
