import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';

  todos: any[] = [];

  todo;

  add(item: HTMLInputElement) {
    this.todos.push({
      value: item.value,
      done: false
    });
    item.value = '';
  }
}
