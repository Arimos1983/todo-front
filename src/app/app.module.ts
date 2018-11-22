import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppRoutingModule } from './/app-routing.module';
import { TasksService } from './tasks.service';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { Interceptor } from './interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './guards/auth-guard';
import { ReversAuthGuard } from './guards/revers-auth-guard';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    EditTaskComponent,
    AddTaskComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TasksService,
    AuthGuard,
    ReversAuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
