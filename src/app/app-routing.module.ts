import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';



const routes: Routes = [
  { path: ' ', redirectTo: '/tasks', pathMatch: 'full'},
  { path: 'tasks', component: TasksComponent },
  { path: 'edit/:id', component: EditTaskComponent },
  { path: 'add', component: AddTaskComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  
  
})
export class AppRoutingModule { }
