import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotamsPanelComponent } from '../notams-panel/notams-panel.component';

@Component({
  selector: 'app-panel-container',
  imports: [CommonModule, NotamsPanelComponent],
  templateUrl: './panel-container.component.html',
})
export class PanelContainerComponent {}
