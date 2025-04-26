import { Component } from '@angular/core';
import { AtisContainerComponent } from '../atis-container/atis-container.component';
import { DashboardFooterComponent } from '../dashboard-footer/dashboard-footer.component';
import { NotamsPanelComponent } from '../panels/notams-panel/notams-panel.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    AtisContainerComponent,
    DashboardFooterComponent,
    NotamsPanelComponent,
  ],
  templateUrl: './dashboard.component.html',
  styles: `
    .grid-container {
      height: 100%;
      width: calc(100% - 500px);
      background-color: #101010
    }
  `,
})
export class DashboardComponent {}
