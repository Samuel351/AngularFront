import { Component } from '@angular/core';
import { AuthGuardService } from '../guards/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private authService : AuthGuardService) {}

  logOut(){
    this.authService.logOut();
  }
}
