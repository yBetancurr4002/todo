// add-todo.component.ts
import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  newTodo: Todo = { id: 0 , title: '', completed: false };

  constructor(private todoService: TodoService) {}

  addTodo(): void {
    if (this.newTodo.title.trim()) {
      this.todoService.addTodo({
        ...this.newTodo,
        id: Date.now()
      });
      this.newTodo.title = ''; // Limpiar el campo de título después de agregar la tarea
    }
  }
}
