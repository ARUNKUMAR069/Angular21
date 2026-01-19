import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'product/:id', component:Product},
    {path:'**', redirectTo:'', pathMatch:'full'}
];
