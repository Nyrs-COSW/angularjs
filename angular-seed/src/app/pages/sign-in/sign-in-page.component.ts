import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})

export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup;
    public loginError: string;
    public username : string;
    public usernameButton: string;

  constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
    this.signInForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

  }

  ngOnInit() {
  }

  doLogin() {
    this.username = this.signInForm.get('username').value;
    this.usersService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        sessionStorage.setItem("NowUser", this.signInForm.get('username').value);
        this.router.navigate(['home']);
      }, error => {
        this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      })
  }

}
