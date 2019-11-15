import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SprintService } from './../../../services/sprint.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public repos:any[] = [];
  public reposArray:any[] = [
    { org: 'CCAFS', repo: 'MARLO'}
  ];

  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(  private db: AngularFirestore,
                private _sprintService: SprintService,
                private activatedRoute: ActivatedRoute,
                private router: Router ) {

    // Parameters
    this.activatedRoute.params.subscribe( params => {
      //console.log(params);
    });

    //Firebase test
    this.itemsCollection = db.collection<any>('repos');
    this.itemsCollection.valueChanges().subscribe( (items:any[])=> {
      console.log(items);
      for (let item of items) {
        this._sprintService.getRepoInfo(item.org, item.repo).subscribe((data: {}) => {
          this.repos.push(data);
        });
      }
    });

  }

  ngOnInit() {


  }


}
