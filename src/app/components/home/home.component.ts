import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodosService } from './../../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public todo: FormGroup;

  constructor(
    private builder: FormBuilder,
    private http: HttpClient,
    private todoService: TodosService
  ) { }

  public get task() { return this.todo.controls.task; }
  public get debut() { return this.todo.controls.debut; }
  public get fin() { return this.todo.controls.fin; }

  ngOnInit() {
    this.todo = this.builder.group({
      task: ['', [Validators.required]],
      debut: ['', [Validators.required]],
      fin: ['', [Validators.required]]
  });
  }

  public onFormSubmit(): void {
    if (this.todo.valid) {
      console.log('Todo : ' + JSON.stringify(this.todo.value));
      // On peut faire l'appel au backend
      this.http.post(
        'http://localhost:3000/Todos',
        this.todo.value
      ).subscribe((datas: any) => {
        // datas contient les données retournées par le backend
        // On peut donc émettre un nouveau todo
        this.todoService.sendTodo(datas);
      });
    } else {
      // On peut aussi afficher un toast
    }
  }

}
