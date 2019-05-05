import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  fireBaseUrl:string = "https://angularsprintmonitoring.firebaseio.com"
  constructor(private http: HttpClient) { }

  createUser(user:any){
    let body = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });

    return this.http.post(`${this.fireBaseUrl}/users.json` , body, { headers }).subscribe((data)=>{
      console.log(data);
    })
  }

  updateUser(key$:string, user:any){
    let body = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type':  'application/json'
    });

    return this.http.put(`${this.fireBaseUrl}/users/${key$}.json`, body, { headers }).subscribe((data)=>{
      console.log(data);
    })
  }

  getUser(key$:string){
    return this.http.get(`${this.fireBaseUrl}/users/${key$}.json`).subscribe((data)=>{
      console.log(data);
    })
  }

  getUsers(){
    return this.http.get(`${this.fireBaseUrl}/users.json`).subscribe((data)=>{
      console.log(data);
    })
  }


}
