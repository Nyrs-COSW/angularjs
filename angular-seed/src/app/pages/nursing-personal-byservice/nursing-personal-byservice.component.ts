import { Component, OnInit } from '@angular/core';
import { NursingservicesService } from '../../services/nursingservices.service';
import {Router}from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-nursing-personal-byservice',
  templateUrl: './nursing-personal-byservice.component.html',
  styleUrls: ['./nursing-personal-byservice.component.css']
})
export class NursingPersonalByServiceComponent implements OnInit {

    private nursingpersonaltlist: User[] = [];

   constructor(public nursingservicesService: NursingservicesService, public router: Router) { }

  ngOnInit() {
    var data = sessionStorage.getItem("nursingService");
    this.nursingservicesService.nursingPersonalList(data).subscribe(todosResponse=>{
           this.nursingpersonaltlist = todosResponse;
        })
  }

  showProfile(username : string){
      sessionStorage.setItem("nurseUser", username );
      this.router.navigate(['/createRequest']);
    }

}
