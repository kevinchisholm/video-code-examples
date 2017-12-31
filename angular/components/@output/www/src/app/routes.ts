import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ParentComponent} from '../parent/parent.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: ParentComponent}
];

export const routing = RouterModule.forRoot(routes);