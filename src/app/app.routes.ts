import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './ids/dashboard/dashboard.component';
import { IdsLayoutComponent } from './ids/ids-layout/ids-layout.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: 'ids', 
        component: IdsLayoutComponent,
        children: [
            {path: '', component: DashboardComponent}
        ]
    },
    {
        path: '', 
        component: HomeComponent,
    },
];
