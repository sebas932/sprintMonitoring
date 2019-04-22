import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { CONFIG } from '../config/config';


const endpoint = 'http://localhost/issuesRoadmap/public/api';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) {
    console.log('Sprint Service ...');
  }

  getSprintInfo(milestoneID:number, org:string, repo:string){
    return this.getQuery(org + '/' + repo +'/sprint/'+ milestoneID).pipe(
      map(this.extractData));
  }

  getQuery(query:string){
    let endQuery = endpoint + '/' + query;
    console.log(endQuery);
    return this.http.get(endQuery, httpOptions);
  }
}
