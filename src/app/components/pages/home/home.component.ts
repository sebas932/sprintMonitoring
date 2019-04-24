import { Component, OnInit } from '@angular/core';
import { SprintService } from './../../../services/sprint.service';
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

  constructor(
                private _sprintService: SprintService,
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
    this._sprintService.getSprints('open', this.org, this.repo).subscribe((data: {}) => {
      this.openMilestones = data;
      this.loading = false;
    });

    this._sprintService.getSprints('closed', this.org, this.repo).subscribe((data: {}) => {
      this.closedMilestones = data;
      this.loading = false;
    });
  }


}
