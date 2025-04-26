import { Component, Input } from '@angular/core';
import { ATIS, AtisService } from '../../services/atis/atis.service';
import { AtisComponent } from '../atis/atis.component';
import { AtisDividerComponent } from '../atis-divider/atis-divider.component';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-atis-container',
  imports: [AtisComponent, AtisDividerComponent, NgIf, AsyncPipe],
  providers: [AtisService],
  templateUrl: './atis-container.component.html',
  styleUrl: './atis-container.component.css',
})
export class AtisContainerComponent {
  protected atis$: Observable<ATIS[]>;
  protected atisService;

  constructor(atisService: AtisService) {
    this.atisService = atisService;
    this.atis$ = this.atisService.getAtisSubject();
  }
}
