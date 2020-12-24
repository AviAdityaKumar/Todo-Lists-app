import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoBodyComponent } from './todo-body/todo-body.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoBodyComponent,
    TodoInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    DragDropModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
