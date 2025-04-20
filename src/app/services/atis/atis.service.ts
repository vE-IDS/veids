import { inject, Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { map, Observable, share, shareReplay, switchMap } from 'rxjs';
import { VatsimService } from '../vatsim/vatsim.service';
import { VATSIMData } from '../../types/vatsim.type';

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
  
  private ATIS: Observable<ATIS[]> = new Observable()

  constructor(vatsimService: VatsimService) {
    vatsimService.getDataObservable().subscribe((data) => {
      this.ATIS.pipe(
        switchMap(() => this.getAtisData(data)),
      )
      console.log('ATIS updated')
    })
  }

  private getAtisData(data: VATSIMData): ATIS[] {
    const newATIS: ATIS[] = []
    console.log(data.atis.length)
    data.atis.map((value) => {

      newATIS.push({
        airport: value.callsign.slice(0,4),
        information: value.atis_code,
        metar: value.text_atis.toString(),
        status: 'Active',
        facility: value.facility.toString()
      })
    })

    return newATIS
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