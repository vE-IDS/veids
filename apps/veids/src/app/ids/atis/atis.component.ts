import { Component, effect, Input, input } from '@angular/core';
import { ATIS } from '../../services/atis/atis.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { AirportService } from '../../services/airport/airport.service';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { Airport } from '../../types/vatsim.type';
import { lastValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-atis',
  imports: [NgIf, NgFor, AsyncPipe, MatIconModule],
  providers: [AirportService],
  templateUrl: './atis.component.html',
  styleUrl: './atis.component.css',
})
export class AtisComponent {
  @Input() data?: ATIS;
  @Input({ required: true }) index?: number;

  protected readonly statusColor = 'text-amber-700';
  protected airportService;
  protected matIconRegistry;

  protected airportData: Promise<Airport> = new Promise(() => null);

  constructor(
    airportService: AirportService,
    matIconRegistry: MatIconRegistry
  ) {
    this.airportService = airportService;
    this.matIconRegistry = matIconRegistry;

    if (this.data?.airport) {
      this.airportData = lastValueFrom(
        this.airportService.getAIPAirport(this.data.airport)
      );
    }
  }

  protected getContainerClass(i: number) {
    return (
      'flex flex-row px-5 py-6 z-10 relative ' +
      (i % 2 == 0 ? 'bg-light-gray' : 'bg-mid-gray')
    );
  }

  protected showAirportInfo() {}
}
