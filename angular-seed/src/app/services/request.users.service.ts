import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import {Observable} from 'rxjs/Observable';


import { Nursingservices } from '../models/nursingservices';
import { Request } from '../models/request';


@Injectable()
export class RequestUsersService extends APIService{

private resourceUrl: string = '/api/requests';

private requests: Request[] = [];

constructor(
        public config: AppConfiguration,
        public authService: AuthService,
        public http: Http
    ) {
        super(config,authService,http);
    }

listTrue(): Observable<Request[]> {
    var data = sessionStorage.getItem("NowUser");
    return this.get(this.resourceUrl+"/"+data+"/True");
  }

listFalse(): Observable<Request[]> {
    var data = sessionStorage.getItem("NowUser");
    return this.get(this.resourceUrl+"/"+data+"/False");
  }

}