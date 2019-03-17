import { Component } from '@angular/core';
import { TodoServiceService } from '../../shared/services/todo-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.styl']
})
export class TodoFormComponent {
  objectFormGroup = new FormGroup({
    newTodoTitle: new FormControl('', Validators.required),
    newTodoBody: new FormControl('', Validators.required),
  });

  constructor(private todoService: TodoServiceService) {}


  createTasks() {
    console.log('Component - "Create NEW Task" TodoFormComponent success');
    this.todoService.CreateTodo(this.objectFormGroup.value);
    this.objectFormGroup.reset();
  }
}
