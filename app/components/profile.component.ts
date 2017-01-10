import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    template: `

            <div class='row'>
                <h2>User Profile</h2>
                <h5>Nickname: {{ profile.nickname }}</h5>
            </div>

            <div class='row'>
                <div class='row-md-3'>
                    <img style='width:150px' height='auto' class='thumbnail' src='{{profile.picture}}' >
                </div>
                <div class='row-md-5'>
                    <ul class='list-group'>
                        <li class='list-group-item'> <strong>Name:</strong> {{profile.name}} </li>
                        <li class='list-group-item'> <strong>Email:</strong> {{profile.email}} </li>
                        <li class='list-group-item'> <strong>Given Name:</strong> {{profile.given_name}} </li>
                        <li class='list-group-item'> <strong>Family Name:</strong> {{profile.family_name}} </li>
                        <li class='list-group-item'> <strong>Last Updated:</strong> {{profile.updated_at | date }} </li>
                    </ul>
                </div>
            </div>
    
    `
})
export class ProfileComponent {

    profile: any;

    constructor( private auth: Auth ) {
        this.profile = JSON.parse( localStorage.getItem('profile') );    
        console.log( this.profile );
    }

}