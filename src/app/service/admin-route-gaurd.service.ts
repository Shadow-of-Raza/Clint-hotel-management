import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AdminHardCodedAuthenticationService } from './admin-hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGaurdService implements CanActivate{

  constructor(private adminHardCodedAuthentication:AdminHardCodedAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.adminHardCodedAuthentication.isAdminLoggedIn()){
      return true;
    }
    return false;
  }

  
}
