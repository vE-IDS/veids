import { Component, Input } from '@angular/core';
import { ATIS, AtisService } from '../../services/atis/atis.service';
import { AtisComponent } from "../atis/atis.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-atis-container',
  imports: [AtisComponent, NgFor],
  providers: [AtisService],
  templateUrl: './atis-container.component.html',
  styleUrl: './atis-container.component.css'
})
export class AtisContainerComponent {
  protected atis: ATIS[]

  constructor(atisService: AtisService) {
    this.atis = atisService.getAtis()
  }
}
