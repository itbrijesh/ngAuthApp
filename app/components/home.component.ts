import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: `
            <h1>Welcome</h1>
            <h5 *ngIf='auth.authenticated()'>You already logged-in.</h5>
            <h5 *ngIf='!auth.authenticated()'>You are not logged-in. Please click on Login button.</h5>
    `
})
export class HomeComponent {

    constructor( private auth: Auth ) {
        console.log( 'Authenticated ?? ' + auth.authenticated() );
    }
}