import { Injectable } from '@angular/core';
import { Airport } from '../../types/vatsim.type';
import { firstValueFrom, map, Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AirportService {
  private airports: Airport[] = [];
  private http;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  public getAIPAirport(icao: string): Observable<Airport> {
    const index = this.airports.findIndex((e) => e.icao_ident == icao);
    if (index != -1) {
      return new Observable<Airport>().pipe(map(() => this.airports[index]));
    } else {
      return this.http
        .get<Airport>(`https://aviationapi.com/api/v1/airports`, {
          params: { apt: icao },
          withCredentials: false,
          headers: {},
        })
        .pipe(
          map((data) => {
            this.airports.push(data);
            return data;
          })
        );
    }
  }
}
