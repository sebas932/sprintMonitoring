import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../../../services/github.service';

@Component({
  selector: 'app-milestone-page',
  templateUrl: './milestone-page.component.html',
  styleUrls: ['./milestone-page.component.css']
})
export class MilestonePageComponent implements OnInit {

  milestone:any;
  milestoneID:number;
  issues:any = [];
  org:string;
  repo:string;

  loading:boolean;

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

    // Loading
    this.loading = true;

    this.getMilestoneInfo();


  }

  ngOnInit() {
  }

  // Functions
  getMilestoneInfo() {
    this._githubService.getMilestoneByID(this.milestoneID, this.org, this.repo).subscribe((data: {}) => {
      this.milestone = data;
      //console.log(data);
      this.getMilestonIssues();
    });
  }

  getMilestonIssues() {
    this._githubService.getIssuesByMilestoneID(this.milestoneID, this.org, this.repo).subscribe((data: {}) => {
      this.issues = data;
      console.log(data[0]);
      this.loading = false;
    });
  }

}
