import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contactus } from './contactus/contactus';
import { App } from './app';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'about',component:About},
    {path:'login',component:Login},
    {path:'contact',component:Contactus},
    {path:'',component:App},
    {path:'**',component:NotFound},
    // {path:'',component:App},

];
