import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';


@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
  })

  export class ProfilePageComponent implements OnInit{
      public user : User;

    constructor(
        public formBuilder:FormBuilder,
        public usersService: UsersService,
        public router: Router){

    }
    ngOnInit(){
        var data = sessionStorage.getItem("Nowuser");
        this.usersService.profile(data).subscribe(todosResponse=>{
            this.user = todosResponse;
         })
    }


  }