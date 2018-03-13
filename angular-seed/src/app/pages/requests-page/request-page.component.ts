import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent implements OnInit {

  private requestlistTrue: Request[] = [];
  private requestlistFalse: Request[] = [];

  constructor(public requestService: RequestService)  {
  }

 ngOnInit() {
    this.requestService.listTrue().subscribe(todosResponse=>{
       this.requestlistTrue = todosResponse;
    })

    this.requestService.listFalse().subscribe(todosResponse=>{
           this.requestlistFalse = todosResponse;
        })
  }

}