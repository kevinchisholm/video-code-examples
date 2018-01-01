import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {ProductsComponent} from '../products/products.component';
import {ProductComponent} from '../products/product.component';
import {ProductDetailsComponent} from '../products/productDetails.component';
import {ProductReviewsComponent} from '../products/productReviews.component';
import {ProductAddOnsComponent} from '../products/productAddOns.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products', component: ProductsComponent},
    {
        path: 'products/:productId',
        component: ProductComponent,
        children: [
            {path: '', redirectTo: 'details', pathMatch: 'full'}, 
            {path: 'details', component: ProductDetailsComponent}, 
            {path: 'reviews', component: ProductReviewsComponent}, 
            {path: 'addons', component: ProductAddOnsComponent}
        ]
    }
];

export const routing = RouterModule.forRoot(routes);