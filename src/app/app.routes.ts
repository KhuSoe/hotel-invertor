import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path: 'home',
        component: FirstComponentComponent,
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'about/:name',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    }
];
