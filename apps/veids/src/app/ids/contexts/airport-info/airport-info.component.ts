import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextLayoutComponent } from '../context-layout/context-layout.component';
import { LineComponent } from './line/line.component';

@Component({
  selector: 'app-airport-info',
  imports: [CommonModule, ContextLayoutComponent, LineComponent],
  templateUrl: './airport-info.component.html',
})
export class AirportInfoComponent {}
