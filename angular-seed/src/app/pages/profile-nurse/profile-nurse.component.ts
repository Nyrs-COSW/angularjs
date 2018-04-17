import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';
import { User } from '../../models/User';


@Component({
  selector: 'app-profile-nurse',
  templateUrl: './profile-nurse.component.html',
  styleUrls: ['./profile-nurse.component.css']
})
export class ProfileNurse implements OnInit {
    public profileNurseForm: FormGroup;
    public profileNurse: User;
    public nameNurse : string;

    constructor(public userService: UsersService,public formBuilder: FormBuilder,public router: Router,) {

    }

    ngOnInit() {

        var data= sessionStorage.getItem("NowUser");
        this.userService.profileNurse(data).subscribe(todosResponse=>{

                this.profileNurse= todosResponse;
                

        })
    }

}