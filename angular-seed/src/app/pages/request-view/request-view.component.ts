import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/request';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';


@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewPageComponent implements OnInit {

    public request: Request;

  constructor(public router: Router,  public requestService: RequestService) { }

  ngOnInit() {
    var data = sessionStorage.getItem("requestCode");
    this.requestService.getRequest(data).subscribe(todosResponse=>{
           this.request = todosResponse;
        })

  }
}
