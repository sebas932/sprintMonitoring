import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(  private activatedRoute: ActivatedRoute,
                private router: Router ) {

    // Parameters
    this.activatedRoute.params.subscribe( params => {
      //console.log(params);
    });

  }

  ngOnInit() {
  }


}
