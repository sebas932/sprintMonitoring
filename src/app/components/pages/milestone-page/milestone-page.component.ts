import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  loads:number;
  loaded:number;

  constructor(
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
    this.loads = 3;
    this.loaded = 0;
    this.getSprintInfo();
    this.getSprintIssues();
    this.getSprintTickets();

  }

  ngOnInit() {
    
  }

  getSprintInfo() {
    this._sprintService.getSprintInfo(this.milestoneID, this.org, this.repo).subscribe((data: any) => {
      this.sprint = data.result;
      this.checkItemsLoading();
    });
  }

  getSprintIssues() {
    this._sprintService.getIssuesBySprint(this.milestoneID, this.org, this.repo).subscribe((data: any) => {
      this.issues = data.result;
      this.checkItemsLoading();
    });
  }

  getSprintTickets() {
    this._sprintService.getTicketsBySprint(this.milestoneID, this.org, this.repo).subscribe((data: any) => {
      this.tickets = data.result;
      this.checkItemsLoading();
    });
  }

  checkItemsLoading(){
    this.loaded++;
    if(this.loaded >= this.loads){
      this.loading = false;
    }
  }

}
