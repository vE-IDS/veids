import { Injectable } from '@angular/core';
import { AIPAirport } from '../../types/vatsim.type';
import { firstValueFrom, map, Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private airports: AIPAirport[] = []
  private http

  constructor(httpClient: HttpClient) { 
    this.http = httpClient
  }

  public getAIPAirport(icao: string): Observable<AIPAirport> {
    const index = this.airports.findIndex((e) => e.icao == icao)
    if (index != -1) {
      return new Observable<AIPAirport>()
      .pipe(
        map(() => this.airports[index])
      )
    } else {
      return this.http.get<AIPAirport>(`https://my.vatsim.net/api/v2/aip/airports/${icao}/`, {withCredentials: false})
      .pipe(
        map((data) => {
          this.airports.push(data)
          return data
        })
      )

    }
  }
}
