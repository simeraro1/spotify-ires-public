import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'callback', loadComponent: () => import('./components/callback/callback.component').then(m => m.CallbackComponent)
    },
    {
        path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent), canActivate: [authGuard]
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: ''
    }
];