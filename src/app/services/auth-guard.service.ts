import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private auth:AuthService) {

  }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.auth.isAuthenticated()){
      return true;
    }
    return false;
  }
}
