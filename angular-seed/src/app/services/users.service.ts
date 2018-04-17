import{Injectable}from'@angular/core';

//Importaciones nuevas
import {Http}from '@angular/http';
import {APIService}from '.././common/api.service';
import {AppConfiguration}from '.././common/config/app-configuration.service';
import {AuthService}from '.././common/auth.service';
import {Observable} from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';
import { User } from '../models/User';

@Injectable()
export class UsersService extends APIService {

private resourceUrl: string = 'user/patient';
private resourceNUrl: string = 'user/nurse';
public role : string;

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http

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

    signUpPatient(username:string,firstname: string, lastname: string, image: string, email:string,password:string, 
                   age:number,role:string) {
    return this.post(this.resourceUrl,new User(username,firstname, lastname, image, email, password, age, role));
    }

   /* signUpNurse(username:string,firstname: string, lastname: string, image: string, email:string,password:string, age:string, experience:string, years: string) {
    return this.post(this.resourceNUrl,new User(username,firstname, lastname, image, email, password, age, experience, years));
    }
*/
    profilePatient(username:string):Observable<User>{
        return this.get(this.resourceUrl+"/"+username);
    }
    profileNurse(username:string):Observable<User>{
      return this.get(this.resourceNUrl+"/"+username);
    }
    profilePatientEdit(username:string,firstname: string, lastname: string, image: string, email:string,password:string,
                       age:number,role:string) {
        return this.post(this.resourceUrl+"/edit",new User(username,firstname, lastname, image, email, password, age,role));
    }
    /*profileNurseEdit(username:string,firstname: string, lastname: string, image: string, email:string,password:string,age:string,experience:string,years:string) {
            return this.post(this.resourceNUrl+"/edit",new User(username,firstname, lastname, image, email, password, age, experience, years));
        }*/
}