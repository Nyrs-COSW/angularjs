import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';
import { Patient } from '../../models/Patient';


@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatient implements OnInit {
    public profilePatientForm: FormGroup;
    public profilePatient: Patient;
    public namePatient : string;

    constructor(public userService: UsersService,public formBuilder: FormBuilder,public router: Router,) {


    }

    ngOnInit() {
        console.log("ENTREEE")
        var data= sessionStorage.getItem("NowUser");
        this.userService.profilePatient(data).subscribe(todosResponse=>{
                this.profilePatient= todosResponse;
                console.log(this.profilePatient)
                this.router.navigate(['profilePatient']);

        })
    }

}