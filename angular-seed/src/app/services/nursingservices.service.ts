import { Injectable } from '@angular/core';
import { APIService } from '../common/api.service';
import { Nursingservices } from '../models/nursingservices';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import {Observable} from 'rxjs/Observable';
import { Nurse } from '../models/Nurse';


@Injectable()
export class NursingservicesService extends APIService{

private resourceUrl: string = '/api/nursingservices';
private resourceNurseUrl: string = 'user/personal';

private nursingservices: Nursingservices[] = [
new Nursingservices("Mdsdfgsdfgd","a","a","a")
];

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

nursingPersonalList(service: string):  Observable<Nurse[]> {
    return this.get(this.resourceNurseUrl+"/"+service);
  }

}