import { inject, Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { BehaviorSubject, map, Observable, share, shareReplay, Subject, Subscriber, switchMap } from 'rxjs';
import { VatsimService } from '../vatsim/vatsim.service';
import { VATSIMData } from '../../types/vatsim.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AtisService {
  /*private ATISData: ATIS[] = [{
    airport: 'KMCO/D',
    information: 'A',
    metar: 'KMCO 190353Z 10005KT 10SM CLR 20/17 A3028 RMK AO2 SLP250 T02000172',
    status: 'Active',
    activeDepartures: ['36R', '35L'],
    facility: 'ZJX'
  },
  {
    airport: 'KMCO/A',
    information: 'M',
    metar: 'KMCO 190353Z 10005KT 10SM CLR 20/17 A3028 RMK AO2 SLP250 T02000172',
    status: 'Active',
    activeApproaches: ['ILS 36L', 'ILS 35R'],
    facility: 'ZJX'
  },
  {
    airport: 'KMIA',
    information: 'J',
    metar: 'KMIA 190353Z 10005KT 10SM CLR 20/17 A3028 RMK AO2 SLP250 T02000172',
    status: 'Offline',
    activeApproaches: ['ILS 9R'],
    activeDepartures: ['9L'],
    facility: 'ZMA'
  }]*/
  
  private ATIS: BehaviorSubject<ATIS[]> = new BehaviorSubject<ATIS[]>([])
  private http

  constructor(vatsimService: VatsimService, httpClient: HttpClient) {
    this.http = httpClient
    vatsimService.getDataObservable().subscribe((data) => {
      this.ATIS.next(this.parseAtisData(data))
      console.log('ATIS updated')
    })
  }

  private parseAtisData(data: VATSIMData): ATIS[] {
    const newATIS: ATIS[] = []
    data.atis.map((value) => {

      newATIS.push({
        airport: value.callsign.slice(0,4),
        information: value.atis_code,
        metar: this.getMetar(value.callsign.slice(0,4)),
        status: 'Active',
        facility: value.facility.toString()
      })
    })
    
    return newATIS
  }

  getMetar(icao: string): Observable<string> {
    return this.http.get(`https://metar.vatsim.net/${icao}`, {responseType: "text"})
  }

  getAtisSubject(): BehaviorSubject<ATIS[]> {
    return this.ATIS
  }
}

export type ATIS = {
  airport: string
  information?: string
  metar: Observable<string>
  status?: string
  facility: string
  activeApproaches?: string[]
  activeDepartures?: string[]
}