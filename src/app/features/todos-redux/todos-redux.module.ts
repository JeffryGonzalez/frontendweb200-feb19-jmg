import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { TodosReduxComponent } from './todos-redux.component';


@NgModule({
  declarations: [TodosReduxComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosFeature', reducers)
  ],
  exports: [TodosReduxComponent]
})
export class TodosReduxModule { }
