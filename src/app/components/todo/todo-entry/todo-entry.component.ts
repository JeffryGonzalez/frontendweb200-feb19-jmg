import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  addItem(item: HTMLInputElement) {
    console.log(item.value);
    // Add it to the list?? - I can't. Ask mom to do it.
    this.itemAdded.emit(item.value);
    item.value = '';
    item.focus();
  }
}
