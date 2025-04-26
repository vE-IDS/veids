import { Component } from '@angular/core';
import { ATIS, DatafeedService } from '../../services/datafeed/datafeed.service';
import { AtisComponent } from '../atis/atis.component';
import { AtisDividerComponent } from '../atis-divider/atis-divider.component';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-atis-container',
  imports: [AtisComponent, AtisDividerComponent, NgIf, AsyncPipe],
  providers: [DatafeedService],
  templateUrl: './atis-container.component.html',
  styleUrl: './atis-container.component.css',
})
export class AtisContainerComponent {
  protected atis$: Observable<ATIS[]>;

  constructor(private readonly datafeedService: DatafeedService) {
    this.atis$ = datafeedService.getATISObservable();
  }
}
