import { Component, OnInit } from '@angular/core';
import { NursingservicesService } from '../../services/nursingservices.service';
import { Nursingservices } from '../../models/nursingservices';


@Component({
  selector: 'app-nursing-services-page',
  templateUrl: './nursing-services-page.component.html',
  styleUrls: ['./nursing-services-page.component.css']
})
export class NursingServicesPageComponent implements OnInit {

  private nursingserviceslist: Nursingservices[] = [];
  
  constructor(public nursingservicesService: NursingservicesService)  {
  }

 ngOnInit() {

    this.nursingservicesService.list().subscribe(todosResponse=>{
       this.nursingserviceslist = todosResponse;
    })
  }

  saveService(name: string){
    sessionStorage.setItem("nursingService", name);
  }
}