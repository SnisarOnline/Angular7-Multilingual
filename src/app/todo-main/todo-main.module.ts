import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoChildRouting } from './todo-main.routing';
import { SharedModule } from '../shared/shared.module';
import { TodoMainComponent } from './todo-main.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailedComponent } from './todo-list/todo-detailed/todo-detailed.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    TodoChildRouting,
    SharedModule,
  ],
  declarations: [
    TodoMainComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDetailedComponent,
  ],
  providers: []
})
export class TodoMainModule { }
