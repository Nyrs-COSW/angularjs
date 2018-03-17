import { Component } from '@angular/core';

//Nuevos imports
import { Router } from '@angular/router';
import { AuthService } from './common/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public usernameButton: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    else{
        this.router.navigate(['/home']);
    }

  }

  public set setUsername(unButton: string) {
    this.usernameButton = unButton;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isNurse() {
  }

  isPatient(){
  }

  signOut() {
    sessionStorage.removeItem("NowUser");
    this.authService.signOut();
  }



}
