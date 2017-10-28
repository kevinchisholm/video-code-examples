import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {Route1Component} from '../route1/route1.component';
import {Route2Component} from '../route2/route2.component';
import {Route3Component} from '../route3/route3.component';

const routes: Routes = [
    {path: '', redirectTo: '/route1', pathMatch: 'full'},
    {path: 'route1', component: Route1Component},
    {path: 'route2', component: Route2Component},
    {path: 'route3', component: Route3Component},
];

export const routing = RouterModule.forRoot(routes);