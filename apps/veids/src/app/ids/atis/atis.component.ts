import { Component, Input } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { Airport } from '../../types/vatsim.type';
import { ATIS } from '../../services/datafeed/datafeed.service';

@Component({
  selector: 'app-atis',
  imports: [NgIf, NgFor, AsyncPipe, MatIconModule],
  providers: [],
  templateUrl: './atis.component.html',
  styleUrl: './atis.component.css',
})

export class AtisComponent {
  @Input() data?: ATIS;
  @Input({ required: true }) index?: number;

  protected readonly statusColor = 'text-amber-700';
  protected matIconRegistry;

  protected airportData: Promise<Airport> = new Promise(() => null);

  constructor(
    matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry = matIconRegistry;

  }

  protected getContainerClass(i: number) {
    return (
      'flex flex-row px-5 py-6 z-10 relative ' +
      (i % 2 == 0 ? 'bg-light-gray' : 'bg-mid-gray')
    );
  }
}
