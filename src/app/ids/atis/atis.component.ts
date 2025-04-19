import { Component, Input, input } from '@angular/core';
import { ATIS } from '../../services/atis/atis.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-atis',
  imports: [NgIf, NgFor],
  templateUrl: './atis.component.html',
  styleUrl: './atis.component.css'
})
export class AtisComponent {
  @Input() data?: ATIS = undefined

  constructor() {}

}
