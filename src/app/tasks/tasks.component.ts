import { Component, OnInit } from '@angular/core';

import { Task } from '../task';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  newTask: Task[];
  
  constructor(
    private taskService: TasksService,
    ) { }

  ngOnInit() {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }
  deleteTask(task){
    
    this.taskService.deleteTask(task.id)
    .subscribe(() => {
      this.tasks = this.tasks.filter(id => id !== task );
    })
    
    
  }

}
