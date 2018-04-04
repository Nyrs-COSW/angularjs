import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';
import { Nurse } from '../../models/Nurse';


@Component({
  selector: 'app-profile-nurse-edit',
  templateUrl: './profile-nurse-edit.component.html',
  styleUrls: ['./profile-nurse-edit.component.css']
})
export class EditNurseComponent implements OnInit {
    public editNurseForm: FormGroup;
    public profileNurse: Nurse;
    public nameNurse : string;

    constructor(public userService: UsersService,public formBuilder: FormBuilder,public router: Router,) {

    }

    ngOnInit() {
        var data= sessionStorage.getItem("NowUser");
        this.userService.profileNurse(data).subscribe(todosResponse=>{
         console.log(todosResponse);
                this.profileNurse= todosResponse;

        })

        this.editNurseForm = this.formBuilder.group({
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



    editNurse(){
            var firstname: string;
            if(this.editNurseForm.get('firstname').value==""){
                firstname = this.profileNurse.firstname;
            }
            else{
                firstname = this.editNurseForm.get('firstname').value;
            }

            var lastname: string;
            if(this.editNurseForm.get('lastname').value==""){
                lastname = this.profileNurse.lastname;
            }
            else{
                lastname = this.editNurseForm.get('lastname').value;
            }

            var email: string;
            if(this.editNurseForm.get('email').value==""){
                email = this.profileNurse.email;
            }
            else{
                email = this.editNurseForm.get('email').value;
            }


            var password: string;
            if(this.editNurseForm.get('password').value==""){
                password = this.profileNurse.password;
            }
            else{
                password = this.editNurseForm.get('password').value;
            }

            var age: string;
            if(this.editNurseForm.get('age').value==""){
                age = this.profileNurse.age;
            }
            else{
                age = this.editNurseForm.get('age').value;
            }

            var experience: string;
            if(this.editNurseForm.get('experience').value==""){
                experience = this.profileNurse.experience;
            }
            else{
                experience = this.editNurseForm.get('experience').value;
            }

            var years: string;
            if(this.editNurseForm.get('years').value==""){
                years = this.profileNurse.years;
            }
            else{
                years = this.editNurseForm.get('experience').value;
            }

            this.userService.profileNurseEdit(
                sessionStorage.getItem("NowUser"),
                firstname,
                lastname,
                this.editNurseForm.get('image').value,
                email,
                password,
                age,
                experience,
                years

                ).subscribe(response => {
                    this.router.navigate(['/profileNurse']);
                }, error => {
                    console.log('Error Posting in: ' + (error && error.message ? error.message : ''));
                })

    }
}