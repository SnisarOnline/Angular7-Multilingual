import {Injectable} from '@angular/core';
import {ObjectTypes} from '../model/ObjectTypes';
import {_BD} from '../data';

@Injectable()
export class TodoServiceService {

  bd: ObjectTypes[];

  constructor() {
    this.bd = _BD;
  }

  /** метод получения данных, тут мы настраиваем откуда мы получим данные */
  getDateBaseTodos(id = '') {
    console.info('Service - getBase Tasks');

    if (id === '') {
      return this.bd;
    } else {
      return this.bd[id];
    }
  }
  private log(message: string, object:any = '') {
    console.info(`TodoService: ${message}`, object);
  }

  /**
   * Обработка клика по чекбоксу
   * @param {ObjectTypes} checkbox обьект
   * @constructor
   */
  CheckTodo(checkbox: ObjectTypes) {
    this.log('CheckTodo Tasks', checkbox);

    checkbox.completed = !checkbox.completed;
  }

  /**
   * Удаление задачи
   * @param {ObjectTypes} del обьект
   * @constructor
   */
  DeleteTodo(del: ObjectTypes) {
    this.log('DeleteTodo Tasks', del);

    const index = this.bd.indexOf(del);
    if (index > -1) {
      this.bd.splice(index, 1);
    }
  }

  /**
   * Создание задачи, добавлением в масив
   * @param objectFormGroup Название и Описание
   * @constructor
   */
  CreateTodo(objectFormGroup) {
    this.log('CreateTodo Tasks', objectFormGroup);

    this.bd.push(new ObjectTypes(this.bd.length, objectFormGroup.newTodoTitle, false, objectFormGroup.newTodoBody));
  }
}
