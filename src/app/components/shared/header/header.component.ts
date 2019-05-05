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
    this.getUserProfile().then((data:any) =>{
      console.log("Header: "+ data);
      this.profile = data;
    });
  }

  login(){
    this.auth.login();
  }

  logout(){
    this.auth.logout();
  }

  getUserProfile(){
    let promise = new Promise((resolve, r)=>{
      if(this.auth.isAuthenticated()){
        if (this.auth.userProfile) {
          resolve(this.auth.userProfile);
        } else {
          this.auth.getProfile((err, profile) => {
            resolve(profile);
          });
        }
      }
    });
    return promise;
  }

}
