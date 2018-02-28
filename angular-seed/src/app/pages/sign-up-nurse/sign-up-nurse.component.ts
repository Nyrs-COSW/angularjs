import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';

@Component({
  selector: 'app-sign-up-nurse',
  templateUrl: './sign-up-nurse.component.html',
  styleUrls: ['./sign-up-nurse.component.css']
})
export class SignUpNurseComponent implements OnInit {

    private signUpNurseForm: FormGroup;

    constructor(
                public userService: UsersService,
                public formBuilder: FormBuilder,
                public router: Router,) {

    }

    ngOnInit() {
        this.signUpNurseForm = this.formBuilder.group({
            username: '',
            firstname: '',
            lastname: '',
            image: '',
            email: '',
            password: '',
            age: '',
            experience: '',
            years:''
        });

    }

    signUp(){
        this.userService.signUpNurse(
            this.signUpNurseForm.get('username').value,
            this.signUpNurseForm.get('firstname').value,
            this.signUpNurseForm.get('lastname').value,
            this.signUpNurseForm.get('image').value,
            this.signUpNurseForm.get('email').value,
            this.signUpNurseForm.get('password').value,
            this.signUpNurseForm.get('age').value,
            this.signUpNurseForm.get('experience').value,
            this.signUpNurseForm.get('years').value

            ).subscribe(response => {
                this.router.navigate(['']);
            }, error => {
                console.log('Error Posting in: ' + (error && error.message ? error.message : ''));
            })

    }

}



