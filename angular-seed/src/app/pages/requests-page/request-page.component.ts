import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request';
import {RequestViewPageComponent} from '.././request-view/request-view.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent implements OnInit {

  private requestlistTrue: Request[] = [];
  private requestlistFalse: Request[] = [];
  private rvpc: RequestViewPageComponent;

  constructor(public router: Router, public requestService: RequestService)  {
  }

 ngOnInit() {
    this.requestService.listTrue().subscribe(todosResponse=>{
       this.requestlistTrue = todosResponse;
    })

    this.requestService.listFalse().subscribe(todosResponse=>{
           this.requestlistFalse = todosResponse;
        })
  }

 saveRequestCode(requestCode: string){
    sessionStorage.setItem("requestCode", requestCode);
 }
}