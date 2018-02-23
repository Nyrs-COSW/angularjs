import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Request } from '../../models/request';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class RequestPageComponent implements OnInit {

  private requestlist: Request[] = [];

  constructor(public requestService: RequestService)  {
  }

 ngOnInit() {

    this.requestService.list().subscribe(todosResponse=>{
       this.requestlist = todosResponse;
    })
  }

}