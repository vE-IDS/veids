import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextLayoutComponent } from '../context-layout/context-layout.component';
import { LineComponent } from './line/line.component';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-airport-info',
  imports: [CommonModule, ContextLayoutComponent, LineComponent],
  providers: [RouterModule],
  templateUrl: './airport-info.component.html',
})
export class AirportInfoComponent {
  protected params: Observable<Params>

  constructor(protected readonly activatedRoute: ActivatedRoute) {
    this.params = activatedRoute.params
  }
}
