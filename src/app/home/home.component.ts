import { Component } from '@angular/core';
import { AuthGuardService } from '../guards/auth-guard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private authService : AuthGuardService) {}

  logOut(){
    this.authService.logOut();
  }

}
