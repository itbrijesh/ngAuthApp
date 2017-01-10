"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var profile_component_1 = require('./components/profile.component');
var authguard_service_1 = require('./services/authguard.service');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [authguard_service_1.AuthGuard] }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map