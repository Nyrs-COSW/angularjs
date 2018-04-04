import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';
import { Patient } from '../../models/Patient';


@Component({
  selector: 'app-profile-patient-edit',
  templateUrl: './profile-patient-edit.component.html',
  styleUrls: ['./profile-patient-edit.component.css']
})
export class EditPatientComponent implements OnInit {
    public editPatientForm: FormGroup;
    public profilePatient: Patient;
    public namePatient : string;

    constructor(public userService: UsersService,public formBuilder: FormBuilder,public router: Router,) {

    }

    ngOnInit() {

        var data= sessionStorage.getItem("NowUser");
        this.userService.profilePatient(data).subscribe(todosResponse=>{

                this.profilePatient= todosResponse;

        })
    }

    editPatient(){
            this.userService.signUpPatient(
                this.editPatientForm.get('username').value,
                this.editPatientForm.get('firstname').value,
                this.editPatientForm.get('lastname').value,
                this.editPatientForm.get('image').value,
                this.editPatientForm.get('email').value,
                this.editPatientForm.get('password').value,
                this.editPatientForm.get('age').value,
                this.editPatientForm.get('creditCardNumber').value,
                this.editPatientForm.get('creditCVV').value

                ).subscribe(response => {
                    this.router.navigate(['']);
                }, error => {
                    console.log('Error Posting in: ' + (error && error.message ? error.message : ''));
                })

    }
}