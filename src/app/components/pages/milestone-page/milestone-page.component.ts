import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from './../../../services/github.service';

@Component({
  selector: 'app-milestone-page',
  templateUrl: './milestone-page.component.html',
  styleUrls: ['./milestone-page.component.css']
})
export class MilestonePageComponent implements OnInit {

  milestone:any = [];
  milestoneID:number;
  org:string;
  repo:string;

  constructor(  private _githubService: GithubService,
                private activatedRoute: ActivatedRoute
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.org = params.org;
      this.repo = params.repo;
      this.milestoneID = params.milestoneID;
    });
  }

  ngOnInit() {
    this.getMilestoneInfo();
  }

  // Functions
  getMilestoneInfo() {
    this._githubService.getMilestoneByID(this.milestoneID, this.org, this.repo).subscribe((data: {}) => {
      this.milestone = data;
    });


  }

}
