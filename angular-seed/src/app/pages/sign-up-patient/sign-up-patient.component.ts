import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';

@Component({
  selector: 'app-sign-up-patient',
  templateUrl: './sign-up-patient.component.html',
  styleUrls: ['./sign-up-patient.component.css']
})
export class SignUpPatientComponent implements OnInit {

    private signUpPatientForm: FormGroup;

    constructor(
                public userService: UsersService,
                public formBuilder: FormBuilder,
                public router: Router,) {

    }

    ngOnInit() {
        this.signUpPatientForm = this.formBuilder.group({
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

    signUp(){
        this.userService.signUpPatient(
            this.signUpPatientForm.get('username').value,
            this.signUpPatientForm.get('firstname').value,
            this.signUpPatientForm.get('lastname').value,
            this.signUpPatientForm.get('image').value,
            this.signUpPatientForm.get('email').value,
            this.signUpPatientForm.get('password').value,
            this.signUpPatientForm.get('age').value,
            this.signUpPatientForm.get('creditCardNumber').value,
            this.signUpPatientForm.get('creditCVV').value

            ).subscribe(response => {
                this.router.navigate(['']);
            }, error => {
                console.log('Error Posting in: ' + (error && error.message ? error.message : ''));
            })

    }

}



