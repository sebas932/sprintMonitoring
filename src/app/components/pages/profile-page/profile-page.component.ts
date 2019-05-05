import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { FirebaseService } from './../../../services/firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styles: []
})
export class ProfilePageComponent implements OnInit {

  profile: any;

  constructor(  public auth: AuthService,
                private _firebaseService:FirebaseService
  ) {

  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        console.log("Error:"+ err);
        this.profile = profile;
      });
    }
  }

  saveUser(){
    this._firebaseService.createUser(this.profile);
  }

}
