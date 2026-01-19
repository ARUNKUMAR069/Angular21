import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'home',component:Home},
    {path:'user/:id',component:User}, // Add dynamic id parameter
    {path:'',redirectTo:'/home',pathMatch:'full'}, // Redirect to home
    {path:'**',component:NotFound},
];
