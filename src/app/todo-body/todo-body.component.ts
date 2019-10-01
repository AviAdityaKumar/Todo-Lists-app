import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';
import { TodoServiceService } from '../todo-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.css']
})
export class TodoBodyComponent implements OnInit {

  constructor(private todoService: TodoServiceService, private snackBar: MatSnackBar) { }

  isEmpty = {todo: true, inProg: true, done: true};

  todo = this.todoService.todoList;
  inProg = this.todoService.inProg;
  done = this.todoService.done;

  ngOnInit() {
  }

  entered(event: CdkDragEnter<string[]>) {
    this.isEmpty[event.container.id] = false;
  }

  exited(event: CdkDragExit<string[]>) {
    this.isEmpty[event.container.id] = true;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message + ' deleted!', 'Dismiss', {duration: 2000});
  }

  deleteTodoItem(index: number) {
    this.todoService.deleteTodo(index);
  }

  deleteProgItem(index: number) {
    this.todoService.deleteProg(index);
  }

  deleteDoneItem(index: number) {
    this.todoService.deleteDone(index);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
