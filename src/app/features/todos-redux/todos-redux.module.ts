import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodosReduxComponent } from './todos-redux.component';

@NgModule({
  declarations: [TodosReduxComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosReduxComponent]
})
export class TodosReduxModule { }
