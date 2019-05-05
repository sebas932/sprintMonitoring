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
    this.getUserProfile();
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

  getUserProfile(){
    if(this.auth.isAuthenticated){
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          console.log("Error:"+ err);
          this.profile = profile;
        });
      }
    }
  }

}
