import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {DebugElement, Directive, Input} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

import {TodoMainComponent} from './todo-main.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoServiceService} from '../shared/services/todo-service.service';

@Directive({
    selector: '[routerLink]',
    host: {
        '(click)': 'onClick()'
    }
})
export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick() {
        this.navigatedTo = this.linkParams;
    }
}

describe('TodoMainComponent', () => {

    let component: TodoMainComponent;
    let fixture: ComponentFixture<TodoMainComponent>;
    let compiled;

    let linkDes: DebugElement[];
    let links: RouterLinkStubDirective[];

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [
                    FormsModule,
                    RouterTestingModule
                ],
                declarations: [
                    RouterLinkStubDirective,
                    TodoMainComponent,
                    TodoFormComponent,
                    TodoListComponent,
                ],
                providers: [TodoServiceService],
            });

            TestBed.compileComponents()
                .then(() => {
                    fixture = TestBed.createComponent(TodoMainComponent);
                    component = fixture.debugElement.componentInstance;
                    compiled = fixture.debugElement.nativeElement;
                    fixture.detectChanges();
                });
        })
    );

    beforeEach(() => {
        fixture.detectChanges();

        linkDes = fixture.debugElement
            .queryAll(By.directive(RouterLinkStubDirective));

        links = linkDes
            .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });


    it('should create TodoMainComponent', async(() => {
        console.log('- TEST "create" TodoMainComponent success');

        expect(component).toBeTruthy();
    }));

    it('Проверим все линки', async(() => {
        console.log('- TEST "[routerLink]" TodoMainComponent success');
        expect(links.length).toBe(4, 'should have 4 links');
        expect(links[0].linkParams).toBe('todo/0', '1st link "Learning HTML/CSS" ');
        expect(links[1].linkParams).toBe('todo/1', '2st link "Learning JavaScript" ');
        expect(links[2].linkParams).toBe('todo/2', '3st link "learning Angular CLI" ');
        expect(links[3].linkParams).toBe('todo/3', '4st link "New Title Todo" ');
    }));

});
