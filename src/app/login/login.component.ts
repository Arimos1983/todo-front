import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: any= {};

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.auth.email, this.auth.password)
      .subscribe(
        data => {
          this.router.navigate(['tasks']);
        }
      )
  }

}
