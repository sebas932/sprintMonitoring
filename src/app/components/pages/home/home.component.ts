import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../../services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openMilestones:any = [];
  closedMilestones:any = [];

  constructor( private _githubService: GithubService ) {

  }

  ngOnInit() {
    this.getMilestones();
  }

  getMilestones() {
    this._githubService.getMilestones('open').subscribe((data: {}) => {
      this.openMilestones = data;
    });

    this._githubService.getMilestones('closed').subscribe((data: {}) => {
      this.closedMilestones = data;
    });
  }


}
