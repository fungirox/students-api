import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { StudentShow } from './pages/student/student-show/student-show';
import { StudentEdit } from './pages/student/student-edit/student-edit';
import { StudentCreate } from './pages/student/student-create/student-create';

/** 
 * R O U T E S
 */

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'student/show/:id', component:StudentShow},
    {path: 'student/create', component:StudentCreate},
    {path: 'student/edit/:id',component:StudentEdit},
    {path: '**', redirectTo: ''}
];
