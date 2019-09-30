import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  constructor() { }
  todoList: Todo[] = [];
  inProg: Todo[] = [];
  done: Todo[] = [];

  addTodo(newItem: string) {
    let x = this.todoList.length;
    const newTodo: Todo = {
      id: x,
      todo: newItem
    }
    this.todoList.push(newTodo);
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }

  deleteProg(index: number) {
    this.inProg.splice(index, 1);
  }

  deleteDone(index: number) {
    this.done.splice(index, 1);
  }
}
