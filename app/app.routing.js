"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var cards_component_1 = require('./cards/cards.component');
exports.appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cards', component: cards_component_1.CardsComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
