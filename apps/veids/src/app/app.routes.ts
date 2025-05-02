import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IdsLayoutComponent } from './ids/ids-layout/ids-layout.component';
import {PanelContainerComponent} from './ids/contexts/panels/panel-container/panel-container.component'
import { AirportInfoComponent } from './ids/contexts/airport-info/airport-info.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'ids',
    component: IdsLayoutComponent,
    children: [
      {
        path: '',
        component: PanelContainerComponent,

      },
      {
        path: 'info/:airportId',
        component: AirportInfoComponent,
      }

    ]
  },
  {
    path: '',
    component: HomeComponent,
  },
];
