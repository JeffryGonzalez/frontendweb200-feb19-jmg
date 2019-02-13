import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosReduxComponent } from './todos-redux.component';

describe('TodosReduxComponent', () => {
  let component: TodosReduxComponent;
  let fixture: ComponentFixture<TodosReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
