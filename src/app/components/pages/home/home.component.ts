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
  public reposArray:any[] = [
    { org: 'CCAFS', repo: 'MARLO'},
    { org: 'google', repo: 'material-design-lite'},
    { org: 'pure-css', repo: 'pure'},
    { org: 'angular', repo: 'angularfire2'}
  ];
  constructor(  private _sprintService: SprintService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) {

    // Parameters
    this.activatedRoute.params.subscribe( params => {
      //console.log(params);
    });

  }

  ngOnInit() {
    for (let item of this.reposArray) {
      this._sprintService.getRepoInfo(item.org, item.repo).subscribe((data: {}) => {
        this.repos.push(data);
      });
    }

  }


}
