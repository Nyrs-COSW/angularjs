import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';
import { User } from '../../models/User';



@Component({
  selector: 'app-profile-patient-edit',
  templateUrl: './profile-patient-edit.component.html',
  styleUrls: ['./profile-patient-edit.component.css']
})
export class EditPatientComponent implements OnInit {
    public editPatientForm: FormGroup;
    public profilePatient: User;
    public namePatient : string;

    constructor(public userService: UsersService,public formBuilder: FormBuilder,public router: Router,) {

    }

    ngOnInit() {

        var data= sessionStorage.getItem("NowUser");
        this.userService.profilePatient(data).subscribe(todosResponse=>{

                this.profilePatient= todosResponse;

        })

        this.editPatientForm = this.formBuilder.group({
            username: '',
            firstname: '',
            lastname: '',
            image: '',
            email: '',
            password: '',
            age: '',

        });
    }



    editPatient(){
            var firstname: string;
            if(this.editPatientForm.get('firstname').value==""){
                firstname = this.profilePatient.firstname;
            }
            else{
                firstname = this.editPatientForm.get('firstname').value;
            }

            var lastname: string;
            if(this.editPatientForm.get('lastname').value==""){
                lastname = this.profilePatient.lastname;
            }
            else{
                lastname = this.editPatientForm.get('lastname').value;
            }

            var email: string;
            if(this.editPatientForm.get('email').value==""){
                email = this.profilePatient.email;
            }
            else{
                email = this.editPatientForm.get('email').value;
            }


            var password: string;
            if(this.editPatientForm.get('password').value==""){
                password = this.profilePatient.password;
            }
            else{
                password = this.editPatientForm.get('password').value;
            }

            var age: number;
            if(this.editPatientForm.get('age').value==""){
                age = this.profilePatient.age;
            }
            else{
                age = this.editPatientForm.get('age').value;
            }

            this.userService.profilePatientEdit(
                sessionStorage.getItem("NowUser"),
                firstname,
                lastname,
                this.editPatientForm.get('image').value,
                email,
                password,
                age,
                "patient"

                ).subscribe(response => {
                    this.router.navigate(['/profilePatient']);
                }, error => {
                    console.log('Error Posting in: ' + (error && error.message ? error.message : ''));
                })

    }
}