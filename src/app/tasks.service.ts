import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TasksService {

  private tasksUrl = 'http://localhost:8000/api/tasks';

  constructor(
    private http: HttpClient){}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
  }
  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url)
  }
  updateTask(task: Task, id: number): Observable<any> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.put(url, task);
  }
  addTask(task): Observable<Task>{
    return this.http.post<Task>(this.tasksUrl, task);
  }
  deleteTask(id): Observable<any>{
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url);
  }

}
