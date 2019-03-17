import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoServiceService} from '../../../shared/services/todo-service.service';
import {ObjectTypes} from '../../../shared/model/ObjectTypes';

@Component({
    selector: 'app-todo-detailed',
    templateUrl: './todo-detailed.component.html',
    styleUrls: ['./todo-detailed.component.styl']
})
export class TodoDetailedComponent implements OnInit {

    ObjectTodo: ObjectTypes;

    constructor(private activatedRoute: ActivatedRoute,
                private Rout: Router,
                private service: TodoServiceService) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.ObjectTodo = this.service.getDateBaseTodos(params.id);

            console.log('Выбранный обьект : ', this.ObjectTodo);
        });

    }

    returnHistory() {
        this.Rout.navigate(['/todo']);
    }
}
