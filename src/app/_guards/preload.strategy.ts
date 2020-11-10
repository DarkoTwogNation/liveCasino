import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Route, Router, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingGuard implements CanActivate, CanActivateChild {
    // canLoad(route: Route, segments: import("@angular/router").UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    //     // console.log(route.)
    // }
    constructor(protected router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.isAuthenticated(route);
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.isAuthenticated(childRoute);
    }
    protected isAuthenticated(route?: ActivatedRouteSnapshot) {
      let allowedUserType = true;
      let loggedInUserType = "dark-side"
      let expectedRole: string
      if (route) {
        expectedRole = route.data.expectedRole;
        if (expectedRole) {
          allowedUserType = loggedInUserType === expectedRole;
        }
      }
     
      if (!allowedUserType) {
         return false;
      }
     
      return true;
    }
}