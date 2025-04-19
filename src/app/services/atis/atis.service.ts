import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AtisService {
  protected ATIS = [{
    airport: 'KMCO',
    information: 'A',
    metar: 'KMCO 190353Z 10005KT 10SM CLR 20/17 A3028 RMK AO2 SLP250 T02000172',
    status: 'Active',
    activeApproaches: ['ILS 36L', 'ILS 35R'],
    activeDepartures: ['36R', '35L']
  }]
  
  constructor() { }

  getAtis(): ATIS[] {
    return this.ATIS
  }
}

export type ATIS = {
  airport: string
  information?: string
  metar?: string
  status?: string
  activeApproaches?: string[]
  activeDepartures?: string[]
}