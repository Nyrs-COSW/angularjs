import{Injectable}from'@angular/core';

//Importaciones nuevas
import {Http}from '@angular/http';
import {APIService}from '.././common/api.service';
import {AppConfiguration}from '.././common/config/app-configuration.service';
import {AuthService}from '.././common/auth.service';
import {Patient} from '.././models/Patient';
import {Nurse} from '.././models/Nurse';
@Injectable()
export class UsersService extends APIService {

private resourceUrl: string = 'user/patient';
private resourceNUrl: string = 'user/nurse';

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

    signUpPatient(username:string,firstname: string, lastname: string, image: string, email:string,password:string, age:number, creditCardNumber:number, creditCVV: number) {
    return this.post(this.resourceUrl,new Patient(username,firstname, lastname, image, email, password, age, creditCardNumber, creditCVV));
    }
    signUpNurse(username:string,firstname: string, lastname: string, image: string, email:string,password:string, age:string, experience:string, years: string) {
    return this.post(this.resourceNUrl,new Nurse(username,firstname, lastname, image, email, password, age, experience, years));
    }


}