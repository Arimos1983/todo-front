import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth-guard';
import { ReversAuthGuard } from './guards/revers-auth-guard';


const routes: Routes = [
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditTaskComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddTaskComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [ReversAuthGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [ReversAuthGuard]}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  
  
})
export class AppRoutingModule { }
