import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SprintService } from './../../../services/sprint.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public repos:any[] = [];

  constructor(  private _sprintService: SprintService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) {

    // Parameters
    this.activatedRoute.params.subscribe( params => {
      //console.log(params);
    });

  }

  ngOnInit() {

    this._sprintService.getRepoInfo('CCAFS', 'MARLO').subscribe((data: {}) => {
      this.repos.push(data);
    });

    this._sprintService.getRepoInfo('google', 'material-design-lite').subscribe((data: {}) => {
      this.repos.push(data);
    });

    this._sprintService.getRepoInfo('pure-css', 'pure').subscribe((data: {}) => {
      this.repos.push(data);
    });



  }


}
