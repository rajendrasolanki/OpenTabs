import { Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';
import { PageOneComponent } from './pages/page/page-one/page-one.component';
import { PageTwoComponent } from './pages/page/page-two/page-two.component';

export const route:Routes = [
    {
        path:'',
        component:DashbordComponent
    },{
        path:'pageOne',
        component:PageOneComponent
    },{
        path:'pageTwo',
        component:PageTwoComponent
    }
];