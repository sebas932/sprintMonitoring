import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styles: []
})
export class ProfilePageComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) {

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

}
