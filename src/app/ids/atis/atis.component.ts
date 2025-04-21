import { Component, effect, Input, input } from '@angular/core';
import { ATIS } from '../../services/atis/atis.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-atis',
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './atis.component.html',
  styleUrl: './atis.component.css'
})
export class AtisComponent {
  @Input() data?: ATIS = undefined
  @Input({required: true}) index?: number = undefined
  
  protected statusColor = 'text-amber-700'

  constructor() {
    
    effect(() => {
      switch (this.data?.status?.toUpperCase()) {
        case 'ACTIVE':
          this.statusColor = 'text-green-700'
          break
        case 'OFFLINE':
          this.statusColor = 'text-red-700'
          break
        default:
          this.statusColor = 'text-amber-700'
      }
    })
  }

  protected getContainerClass (i: number) {
    return 'flex flex-row px-5 py-6 z-10 ' + (i % 2 == 0 ? 'bg-light-gray' :'bg-mid-gray')
  }
}
