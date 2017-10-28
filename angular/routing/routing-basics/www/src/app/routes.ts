import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from '../home/home.component';
import {ProductsComponent} from '../products/products.component';
import {AboutComponent} from '../about/about.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'about', component: AboutComponent},
];

export const routing = RouterModule.forRoot(routes);