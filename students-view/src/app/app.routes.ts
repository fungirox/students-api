import { Routes } from '@angular/router';
import { Student } from './pages/student/student';
import { Home } from './pages/home/home';

/** 
 * R O U T E S
 */

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'student/show/:id', component:Student},
    //{path: 'student/create',},
    //{path: 'student/edit/:id',},
    {path: '**', redirectTo: ''}
];
