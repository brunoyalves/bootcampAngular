import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {

  }
  isLogged() {
    return this.authService.isLogged();
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
