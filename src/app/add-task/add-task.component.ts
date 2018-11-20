import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  

  task = {};

  constructor(
    private taskService: TasksService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
  addTask(task): void {
    console.log(task)
    this.taskService.addTask(task)
      .subscribe(() => this.goBack());
  }

}