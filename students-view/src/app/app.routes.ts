import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { StudentShow } from './pages/student/student-show/student-show';
import { StudentEdit } from './pages/student/student-edit/student-edit';
import { StudentCreate } from './pages/student/student-create/student-create';
import { EmailList } from './pages/email/email-list/email-list';
import { EmailShow } from './pages/email/email-show/email-show';
import { EmailEdit } from './pages/email/email-edit/email-edit';
import { EmailCreate } from './pages/email/email-create/email-create';
import { PhoneList } from './pages/phone/phone-list/phone-list';
import { PhoneShow } from './pages/phone/phone-show/phone-show';
import { PhoneCreate } from './pages/phone/phone-create/phone-create';
import { PhoneEdit } from './pages/phone/phone-edit/phone-edit';
import { AddressList } from './pages/address/address-list/address-list';
import { AddressShow } from './pages/address/address-show/address-show';
import { AddressCreate } from './pages/address/address-create/address-create';
import { AddressEdit } from './pages/address/address-edit/address-edit';

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
    // P H O N E S 
    {path: 'phone/list', component:PhoneList},
    {path: 'phone/show/:id', component:PhoneShow},
    {path: 'phone/create', component:PhoneCreate},
    {path: 'phone/edit/:id', component:PhoneEdit},
    // A D D R E S S E S
    {path: 'address/list', component:AddressList},
    {path: 'address/show/:id', component:AddressShow},
    {path: 'address/create', component:AddressCreate},
    {path: 'address/edit/:id', component:AddressEdit},
    {path: '**', redirectTo: ''}
];
