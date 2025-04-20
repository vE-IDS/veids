import { Component, Input } from '@angular/core';
import { ATIS, AtisService } from '../../services/atis/atis.service';
import { AtisComponent } from "../atis/atis.component";
import { AtisDividerComponent } from "../atis-divider/atis-divider.component";
import { Observable } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-atis-container',
  imports: [AtisComponent, AtisDividerComponent, NgIf],
  providers: [AtisService],
  templateUrl: './atis-container.component.html',
  styleUrl: './atis-container.component.css'
})
export class AtisContainerComponent {
  protected atis$: Observable<ATIS[]>
  protected atisData: ATIS[] = []

  constructor(atisService: AtisService) {
    this.atis$ = atisService.getAtisObservable()

    this.atis$.subscribe((data) => {
      data.sort((a, b) => a.facility.localeCompare(b.facility))
      this.atisData = data
    })
  }
}
