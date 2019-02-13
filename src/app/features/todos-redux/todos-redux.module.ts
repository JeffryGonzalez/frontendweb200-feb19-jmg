import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { TodosReduxComponent } from './todos-redux.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [TodosReduxComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosFeature', reducers)
  ],
  exports: [TodosReduxComponent]
})
export class TodosReduxModule { }
