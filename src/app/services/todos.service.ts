import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Todo } from './../models/todo';
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private _todos: Subject<Todo[]> = new Subject<Todo[]>();

  constructor() { }
}
