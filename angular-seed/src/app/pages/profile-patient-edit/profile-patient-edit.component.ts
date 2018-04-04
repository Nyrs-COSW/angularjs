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

        this.editPatientForm = this.formBuilder.group({
            username: '',
            firstname: '',
            lastname: '',
            image: '',
            email: '',
            password: '',
            age: '',
            creditCardNumber: '',
            creditCVV:''
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

            var creditCardNumber: number;
            if(this.editPatientForm.get('creditCardNumber').value==""){
                creditCardNumber = this.profilePatient.creditCardNumber;
            }
            else{
                creditCardNumber = this.editPatientForm.get('creditCardNumber').value;
            }

            var creditCVV: number;
            if(this.editPatientForm.get('creditCVV').value==""){
                creditCVV = this.profilePatient.creditCVV;
            }
            else{
                creditCVV = this.editPatientForm.get('creditCVV').value;
            }

            this.userService.profilePatientEdit(
                sessionStorage.getItem("NowUser"),
                firstname,
                lastname,
                this.editPatientForm.get('image').value,
                email,
                password,
                age,
                creditCardNumber,
                creditCVV

                ).subscribe(response => {
                    this.router.navigate(['/profilePatient']);
                }, error => {
                    console.log('Error Posting in: ' + (error && error.message ? error.message : ''));
                })

    }
}