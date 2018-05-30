import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TodosService } from './../../services/todos.service';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public todos: any[];
  public oTodo: Subscription;
  public todo: Todo;

  constructor(
    private http: HttpClient,
    private todoService: TodosService
  ) {
    // On souscrit au service pour récupérer un todo
    this.oTodo = this.todoService.getTodo().subscribe(
      (todo) => {
        this.todo = todo;
        // Le nouveau todo est ajouté
        this.todos.push(todo);
      }
    );
   }

  ngOnInit() {
    this.http.get<any[]>(
      'http://localhost:3000/Todos'
    ).subscribe((datas) => {
      // La, j'ai normalement ma liste de tâches
      this.todos = datas;
    });
  }

  onDestroy() {
    // Pour être prudent et éviter de gaspiller
    // la mémoire
    this.oTodo.unsubscribe();
  }
}
