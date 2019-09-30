import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  constructor() { }
  todoList: Todo[] = [];

  addTodo(newItem: string) {
    let x = this.todoList.length;
    if (x == 7) return;
    const newTodo: Todo = {
      id: x,
      todo: newItem
    }
    this.todoList.push(newTodo);
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
