import{Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder}from '@angular/forms';
import { RequestService } from '../../services/request.service';
import {UsersService}from '../../services/users.service';
import {Router}from '@angular/router';
import { Patient } from '../../models/Patient';
import { Nurse } from '../../models/Nurse';


@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequest implements OnInit {
    public profileNurseForm: FormGroup;
    public profileNurse: Nurse;
    public nameNurse : string;


    private createRequestForm: FormGroup

    constructor(public requestService: RequestService, public userService: UsersService,public formBuilder: FormBuilder,public router: Router,) {

    }

    ngOnInit() {

        var data= sessionStorage.getItem("nurseUser");
        this.userService.profileNurse(data).subscribe(todosResponse=>{
                console.log(todosResponse);
                this.profileNurse= todosResponse;
                

        })

        this.createRequestForm = this.formBuilder.group({
            description: '',
            dateService: ''
        });

    }


    createService(){
        console.log("entre al metodo");
        var descr = this.createRequestForm.get('description').value;
        var dateSer = this.createRequestForm.get('dateService').value;
        var dataService = sessionStorage.getItem("nursingService");
        var nurseLocal= sessionStorage.getItem("nurseUser");
        var currentUser = sessionStorage.getItem("NowUser");
        this.requestService.createRequest(descr);

    }


}