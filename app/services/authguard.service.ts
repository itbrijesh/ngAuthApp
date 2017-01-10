import { Injectable } from '@angular/core';
import { Auth } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor( private auth: Auth, private router: Router ) {

    }
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        if( this.auth.authenticated() ) {
            console.log('Valid login token exists! No login Required !!!');
            return true;
        }
        else {
            console.log('Valid login token does not exists !!!');
            this.router.navigate(['']);
            //return true;
        }

    }
}