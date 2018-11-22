import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { AuthService } from '../auth.service';
import { User } from '../user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {};
  error = {}

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  register(){
    this.authService.register(this.user)
      .subscribe(
        data => {
          this.router.navigate(['tasks']);
        },
        error => {
          this.error = error.error.errors;
        }
      )
  }

}
