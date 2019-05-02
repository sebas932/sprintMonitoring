import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged:boolean;

  constructor( public auth:AuthService ) {
    auth.handleAuthentication();

    //console.log("isLogged: ", auth.isAuthenticated());
    this.isLogged = auth.isAuthenticated();
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

}
