import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AtisService {
  private ATISData: ATIS[] = [{
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
  }]
  
  private ATIS: Observable<ATIS[]>

  constructor() {
    this.ATIS = new Observable((subscriber) => {
      subscriber.next(this.ATISData)
    })
  }

  getAtisObservable(): Observable<ATIS[]> {
    return this.ATIS
  }
}

export type ATIS = {
  airport: string
  information?: string
  metar?: string
  status?: string
  facility: string
  activeApproaches?: string[]
  activeDepartures?: string[]
}