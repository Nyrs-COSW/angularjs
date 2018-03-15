import { Component, OnInit } from '@angular/core';
import { RequestUsersService } from '../../services/request.users.service';
import { Request } from '../../models/request';

@Component({
  selector: 'app-request-page-users',
  templateUrl: './request-page.users.component.html',
  styleUrls: ['./request-page.users.component.css']
})
export class RequestPageUsersComponent implements OnInit {

  private requestlistTrue: Request[] = [];
  private requestlistFalse: Request[] = [];

  constructor(public requestServiceUsers: RequestUsersService)  {
  }

 ngOnInit() {
    this.requestServiceUsers.listTrue().subscribe(todosResponse=>{
       this.requestlistTrue = todosResponse;
    })

    this.requestServiceUsers.listFalse().subscribe(todosResponse=>{
           this.requestlistFalse = todosResponse;
        })
  }

}