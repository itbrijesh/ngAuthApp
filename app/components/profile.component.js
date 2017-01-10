"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require('../services/auth.service');
var ProfileComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            template: "\n\n            <div class='row'>\n                <h2>User Profile</h2>\n                <h5>Nickname: {{ profile.nickname }}</h5>\n            </div>\n\n            <div class='row'>\n                <div class='row-md-3'>\n                    <img style='width:150px' height='auto' class='thumbnail' src='{{profile.picture}}' >\n                </div>\n                <div class='row-md-5'>\n                    <ul class='list-group'>\n                        <li class='list-group-item'> <strong>Name:</strong> {{profile.name}} </li>\n                        <li class='list-group-item'> <strong>Email:</strong> {{profile.email}} </li>\n                        <li class='list-group-item'> <strong>Given Name:</strong> {{profile.given_name}} </li>\n                        <li class='list-group-item'> <strong>Family Name:</strong> {{profile.family_name}} </li>\n                        <li class='list-group-item'> <strong>Last Updated:</strong> {{profile.updated_at | date }} </li>\n                    </ul>\n                </div>\n            </div>\n    \n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.Auth])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map