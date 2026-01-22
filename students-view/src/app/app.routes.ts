import { Routes } from '@angular/router';
import { Student } from './pages/student/student';
import { Home } from './pages/home/home';
import { StudentEdit } from './pages/student/student-edit/student-edit';

/** 
 * R O U T E S
 */

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'student/show/:id', component:Student},
    //{path: 'student/create',},
    {path: 'student/edit/:id',component:StudentEdit},
    {path: '**', redirectTo: ''}
];
