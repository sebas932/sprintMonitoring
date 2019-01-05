import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint = 'https://api.github.com/repos/CCAFS/MARLO/';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'access_token':  ''
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

  getMilestones(state:string= 'all'): Observable<any> {
    return this.http.get(endpoint + 'milestones?state=' +state + '&per_page=100&direction=desc', { httpOptions }).pipe(
      map(this.extractData));
  }

}
