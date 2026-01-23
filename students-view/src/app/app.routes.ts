import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { StudentShow } from './pages/student/student-show/student-show';
import { StudentEdit } from './pages/student/student-edit/student-edit';
import { StudentCreate } from './pages/student/student-create/student-create';
import { EmailList } from './pages/email/email-list/email-list';
import { EmailShow } from './pages/email/email-show/email-show';
import { EmailEdit } from './pages/email/email-edit/email-edit';
import { EmailCreate } from './pages/email/email-create/email-create';

/** 
 * R O U T E S
 */

export const routes: Routes = [
    // S T U D E N T S 
    {path: '', component:Home},
    {path: 'student/show/:id', component:StudentShow},
    {path: 'student/create', component:StudentCreate},
    {path: 'student/edit/:id', component:StudentEdit},
    // E M A I L S
    {path: 'email/list', component:EmailList},
    {path: 'email/show/:id', component:EmailShow},
    {path: 'email/create', component:EmailCreate},
    {path: 'email/edit/:id', component:EmailEdit},

    {path: '**', redirectTo: ''}
];
