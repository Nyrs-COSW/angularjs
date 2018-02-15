import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Nursingservices } from '../models/nursingservices';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class NursingservicesService extends APIService{

private resourceUrl: string = '/api/nursingservices';

private nursingservices: Nursingservices[] = [];

constructor(
        public config: AppConfiguration,
        public authService: AuthService,
        public http: Http
    ) {
        super(config,authService,http);
    }

list(): Observable<Nursingservices[]> {
    return this.get(this.resourceUrl);
  }

}