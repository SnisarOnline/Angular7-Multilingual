import { Component, OnInit } from '@angular/core';
import { ObjectTypes } from '../../shared/model/ObjectTypes';
import {TodoServiceService} from '../../shared/services/todo-service.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {
    ObjectTodos: ObjectTypes[];

    constructor(private todoService: TodoServiceService) {
      this.ObjectTodos = [];
    }

    ngOnInit() {
      this.ObjectTodos = this.todoService.getDateBaseTodos();
    }


    /**
     * Удаление задачи
     * @param {ObjectTypes} del
     */
    onDelete(del: ObjectTypes) {
      this.todoService.DeleteTodo(del);
    }
}
