import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoDataService } from './components/todo/todo-data.service';
import { TodoEntryComponent } from './components/todo/todo-entry/todo-entry.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosReduxModule } from './features/todos-redux/todos-redux.module';
import { reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    TodoComponent,
    TodoListComponent,
    TodoEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosReduxModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
