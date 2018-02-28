import{Injectable}from'@angular/core';

//Importaciones nuevas
<<<<<<< HEAD
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UsersService extends APIService {
  
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http,
    public user : User
=======
import {Http}from '@angular/http';
import {APIService}from '.././common/api.service';
import {AppConfiguration}from '.././common/config/app-configuration.service';
import {AuthService}from '.././common/auth.service';
import {Patient} from '.././models/Patient';
@Injectable()
export class UsersService extends APIService {

private resourceUrl: string = 'user/patient';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http

>>>>>>> 084d1a779ef2af02a0c9ed8a9a8a9b1f1ef8303d
  ) {
    super(config, authService, http);
  }

  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

<<<<<<< HEAD
  profile(username:string): Observable<any>{
    return this.get('user/profile/'+username);
  }
=======
    signUpPatient(username:string,firstname: string, lastname: string, image: string, email:string,password:string, age:number, creditCardNumber:number, creditCVV: number) {
    return this.post(this.resourceUrl,new Patient(username,firstname, lastname, image, email, password, age, creditCardNumber, creditCVV));
    }

>>>>>>> 084d1a779ef2af02a0c9ed8a9a8a9b1f1ef8303d
}