import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });


  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));


  it(`should have as title ' 2Do'`, async(() => {
    expect(component.title).toEqual(' 2Do');
  }));


  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('h1').textContent).toContain('Angular  2Do!');
  }));


});
