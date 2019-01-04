import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../../services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  milestones:any = [];

  constructor( private _githubService: GithubService ) { }

  ngOnInit() {
    this.getMilestones();
  }

  getMilestones() {
    this.milestones = [];
    this._githubService.getMilestones().subscribe((data: {}) => {
      console.log(data);
      this.milestones = data;
    });
  }


}
