import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from './../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _todo: Subject<Todo> = new Subject<Todo>();

  constructor() { }

  // Emet le nouveau todo vers tous les subscribers
  public sendTodo(todo: Todo): void {
    this._todo.next(todo);
  }

  // Retourne un objet Todo comme Observable
  public getTodo(): Observable<Todo> {
    return this._todo.asObservable();
  }
}
