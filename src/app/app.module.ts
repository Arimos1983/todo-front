import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppRoutingModule } from './/app-routing.module';
import { TasksService } from './tasks.service';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
