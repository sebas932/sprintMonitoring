import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: any;

  constructor( public auth:AuthService ) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
