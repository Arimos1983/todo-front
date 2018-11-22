import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  @Input() task: Task;
  error = {};

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService,
    private location: Location
  ) { }

  ngOnInit(): void{
    this.getTask();
  }
  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
    .subscribe(task => this.task = task);
  }
  goBack(): void {
    this.location.back();
  }
  save(task): void {
    this.taskService.updateTask(task, task.id)
      .subscribe(
          () => this.goBack(),
        error =>{
          this.error = error.error.errors;
        }
      ) 
  }

}
