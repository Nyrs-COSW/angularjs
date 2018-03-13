import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';

@Component({
  selector: 'app-sign-up-buttons',
  templateUrl: './sign-up-buttons.component.html',
  styleUrls: ['./sign-up-buttons.component.css']
})
export class SignUpButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
