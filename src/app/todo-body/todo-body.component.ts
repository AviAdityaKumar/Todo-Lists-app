import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoServiceService } from '../todo-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-body',
  templateUrl: './todo-body.component.html',
  styleUrls: ['./todo-body.component.css']
})
export class TodoBodyComponent implements OnInit {

  constructor(private todoService: TodoServiceService, private _snackBar: MatSnackBar) { }
  todo = this.todoService.todoList;
  inProg = this.todoService.inProg;
  done = this.todoService.done;

  ngOnInit() {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message + " deleted!", "Dissmis", {duration: 2000,});
  }

  deleteTodoItem(index){
    this.todoService.deleteTodo(index);
  }

  deleteProgItem(index){
    this.todoService.deleteProg(index);
  }

  deleteDoneItem(index){
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
