import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from './../../../services/github.service';
import { SprintService } from './../../../services/sprint.service';

@Component({
  selector: 'app-milestone-page',
  templateUrl: './milestone-page.component.html',
  styleUrls: ['./milestone-page.component.css']
})
export class MilestonePageComponent implements OnInit {

  sprint:any = [];
  issues:any = [];
  tickets:any = [];
  repository:any = [];
  milestoneID:number;
  org:string;
  repo:string;

  constructor(  private _githubService: GithubService,
                private _sprintService:  SprintService,
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
    this._sprintService.getSprintInfo(this.milestoneID, this.org, this.repo).subscribe((data: {}) => {
      this.sprint = data;
    });


  }

}
