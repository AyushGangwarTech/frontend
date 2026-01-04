import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Register } from './components/register/register';
import { FindDonor } from './components/find-donor/find-donor';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'register', component: Register},
    { path: 'dashboard', component: Dashboard},
    { path: 'find-donor', component: FindDonor}    
];
