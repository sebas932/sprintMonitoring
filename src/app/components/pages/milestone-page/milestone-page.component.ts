import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../../../services/github.service';
import { SprintService } from './../../../services/sprint.service';

@Component({
  selector: 'app-milestone-page',
  templateUrl: './milestone-page.component.html',
  styleUrls: ['./milestone-page.component.css']
})
export class MilestonePageComponent implements OnInit {

  sprint:any;
  issues:any = [];
  tickets:any = [];
  repository:any = [];
  milestoneID:number;
  org:string;
  repo:string;

  loading:boolean;

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

    // Loading
    this.loading = true;

    this.getMilestoneInfo();


  }

  ngOnInit() {
  }

  // Functions
  getMilestoneInfo() {
    this._sprintService.getSprintInfo(this.milestoneID, this.org, this.repo).subscribe((data: any) => {
      this.sprint = data.result;
      this.loading = false;
    });
  }

  getMilestonIssues() {
    this._githubService.getIssuesByMilestoneID(this.milestoneID, this.org, this.repo).subscribe((data: {}) => {
      this.issues = data;
      this.loading = false;
    });
  }

}
