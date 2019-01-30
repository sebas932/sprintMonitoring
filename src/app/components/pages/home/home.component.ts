import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../../services/github.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  openMilestones:any = [];
  closedMilestones:any = [];
  org:string;
  repo:string;
  loading:boolean;

  constructor(  private _githubService: GithubService,
                private activatedRoute: ActivatedRoute,
                private router: Router
              ) {

    // Parameters
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.org = params.org;
      this.repo = params.repo;
    });

    // Loading
    this.loading = true;
  }

  ngOnInit() {
    this.getMilestones();
  }

  //Navigation
  gotoMilestone(milestoneID){
    this.router.navigate([ this.org, this.repo, milestoneID]);
  }

  // Functions
  getMilestones() {
    this._githubService.getMilestones('open', this.org, this.repo).subscribe((data: {}) => {
      this.openMilestones = data;

      this._githubService.getMilestones('closed', this.org, this.repo).subscribe((data: {}) => {
        this.closedMilestones = data;
        this.loading = false;
      });
    });

  }


}
