import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { 'path': '', 'component': Home },
    { 'path': '404', 'component': PageNotFound },
    { 'path': ':username', 'component': Profile }
];
