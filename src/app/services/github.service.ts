import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { CONFIG } from '../config/config';


const endpoint = 'https://api.github.com/repos';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization':  'token '+ CONFIG.github.access_token
  })
};


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) {
    console.log('Github Service ...');
  }

  getQuery(query:string){
    return this.http.get(endpoint + '/' + query, httpOptions )
  }

  getMilestones(state:string= 'all', org:string, repo:string): Observable<any> {
    return this.getQuery(org + '/' + repo +'/milestones?state=' +state + '&per_page=100&direction=desc').pipe(
      map(this.extractData));
  }

  getMilestoneByID(milestoneID:number, org:string, repo:string){
    return this.getQuery(org + '/' + repo +'/milestones/'+ milestoneID).pipe(
      map(this.extractData));
  }

}
