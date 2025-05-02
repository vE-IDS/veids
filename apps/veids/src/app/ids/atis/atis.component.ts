import { Component, computed, Input, WritableSignal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { Airport } from '../../types/vatsim.type';
import { ATIS, DatafeedService } from '../../services/datafeed/datafeed.service';
import { formatDateToZ } from '../../../lib/format';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atis',
  imports: [NgIf, NgFor, MatIconModule, RouterLink],
  providers: [DatafeedService],
  templateUrl: './atis.component.html',
  styleUrl: './atis.component.css',
})

export class AtisComponent {
  @Input() data?: ATIS;
  @Input({ required: true }) index?: number;

  protected readonly statusColor = 'text-amber-700'
  protected airportData: Promise<Airport> = new Promise(() => null)
  protected readonly lastUpdated$: WritableSignal<Date>
  protected readonly lastUpdatedString = computed(() => formatDateToZ(this.lastUpdated$()))

  constructor(
    protected readonly matIconRegistry: MatIconRegistry,
    protected readonly datafeedService: DatafeedService
  ) {
    this.lastUpdated$ = datafeedService.getUpdateTimeSignal()
  }

  protected getContainerClass(i: number) {
    return (
      'flex flex-row px-5 py-6 z-10 relative ' +
      (i % 2 == 0 ? 'bg-light-gray' : 'bg-mid-gray')
    );
  }
}
