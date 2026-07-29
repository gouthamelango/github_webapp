import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    { 'path': '404', 'component': PageNotFound },
    { 'path': ':username', 'component': Profile }
];
