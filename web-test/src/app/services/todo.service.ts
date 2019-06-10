import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  limitNumber: number = 5;
  // todosLimit: string = `?_limit=${this.limitNumber}`;

  constructor(public http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}?_limit=${this.limitNumber}`);
  }

  changeLimitNumber(num) {
    console.log("OUTPUT: TodoService -> changeLimitNumber -> num", num)
    this.limitNumber = num;
    this.getTodos()
   
    
  }
}
