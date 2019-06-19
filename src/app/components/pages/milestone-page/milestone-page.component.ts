import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SprintService } from './../../../services/sprint.service';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-milestone-page',
  templateUrl: './milestone-page.component.html',
  styleUrls: ['./milestone-page.component.css']
})
export class MilestonePageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  sprint:any;
  issues:any = [];
  myIssues:any = [];
  tickets:any = [];
  repository:any = [];
  milestoneID:number;
  profile: any;
  org:string;
  repo:string;
  issuesTick:boolean = false;

  loading:any;

  constructor(
                private _sprintService:  SprintService,
                private activatedRoute: ActivatedRoute,
                public auth: AuthService
  ) {
    // Parameters
    this.activatedRoute.params.subscribe( params => {
      console.log(params);
      this.org = params.org;
      this.repo = params.repo;
      this.milestoneID = params.milestoneID;
    });

    // Loading
    this.loading = {
      sprint : true,
      tickets: true,
      issues: true
    };
  }

  ngOnInit() {
    this.getSprintInfo();
    this.getSprintTickets();
    this.getSprintIssues();

    this.dtOptions = {
      pagingType: 'full_numbers',
      paging:   false,
      info:     false
    };
  }

  getSprintInfo() {
    this._sprintService.getSprintInfo(this.milestoneID, this.org, this.repo).subscribe((data: any) => {
      this.sprint = data.result;
      this.loading.sprint= false;
    });
  }

  getSprintIssues() {
    this._sprintService.getIssuesBySprint(this.milestoneID, this.org, this.repo).subscribe((data: any) => {
      this.issues = data.result;
      this.loading.issues= false;

      // Get User Issues
      this.getUserProfile().then((data:any) =>{
        console.log(data.nickname);
        for (let issue of this.issues) {
            for (let assigne of issue.assignees) {
              if(assigne.login == data.nickname ){
                this.myIssues.push(issue);
              }
            }
        }
      });

    });
  }

  getSprintTickets() {
    this._sprintService.getTicketsBySprint(this.milestoneID, this.org, this.repo).subscribe((data: any) => {
      this.tickets = data.result;
      this.loading.tickets= false;
    });
  }

  removeSpecialCharacteres(text){
    return text.replace(/[^A-Z0-9]+/ig, "-");
  }

  getUserProfile(){
    let promise = new Promise((resolve, r)=>{
      if(this.auth.isAuthenticated()){
        if (this.auth.userProfile) {
          resolve(this.auth.userProfile);
        } else {
          this.auth.getProfile((err, profile) => {
            resolve(profile);
          });
        }
      }
    });
    return promise;
  }


  changeIssuesList(){
    let previousIssues = this.issues;
    this.issues= this.myIssues;
    this.myIssues = previousIssues;

    this.issuesTick = !this.issuesTick;
  }
}
