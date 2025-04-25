import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
@Component({
  selector: 'app-ids-layout',
  imports: [NavbarComponent, DashboardComponent],
  templateUrl: './ids-layout.component.html',
})

export class IdsLayoutComponent {
  
}
