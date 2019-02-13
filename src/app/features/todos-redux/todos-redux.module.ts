import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { TodosEffects } from './effects/todos.effects';
import { reducers } from './reducers';
import { TodosReduxComponent } from './todos-redux.component';

@NgModule({
  declarations: [TodosReduxComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosFeature', reducers),
    EffectsModule.forFeature([TodosEffects]),
    HttpClientModule
  ],
  exports: [TodosReduxComponent]
})
export class TodosReduxModule { }
