import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { CONFIG } from '../config/config';
import { environment } from '../../environments/environment';


const endpoint = environment.sprintService.endPoint;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  organization:string;
  repository:string;

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  constructor(private http: HttpClient) {
    console.log('Sprint Service ...');
  }

  getSprintInfo(id:number, org:string, repo:string){
    return this.getQuery(org + '/' + repo +'/sprint/'+ id).pipe(
      map(this.extractData));
  }

  getIssuesBySprint(id:number, org:string, repo:string){
    return this.getQuery(org + '/' + repo +'/sprint/'+ id +'/issues').pipe(
      map(this.extractData));
  }

  getTicketsBySprint(id:number, org:string, repo:string){
    return this.getQuery(org + '/' + repo +'/sprint/'+ id +'/tickets').pipe(
      map(this.extractData));
  }


  getSprints(state:string= 'all', org:string, repo:string): Observable<any> {
    return this.getQuery(org + '/' + repo +'/sprints?state=' +state ).pipe(
      map(this.extractData));
  }

  getQuery(query:string){
    let endQuery = endpoint + '/' + query;
    return this.http.get(endQuery, httpOptions);
  }
}
