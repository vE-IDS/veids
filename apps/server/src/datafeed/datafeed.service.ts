import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map, Observable } from 'rxjs'
import { VATSIMData } from './interfaces/datafeed.interface';
import ATIS from './dto/atis.dto';

@Injectable()
export class DatafeedService {
    constructor(private readonly httpModule: HttpService) {}

    async updateAllAtis(): Promise<ATIS[]> {
        const vatsimData = await this.getVatsimData()
        const atisList: ATIS[] = []
        console.log(vatsimData)
        
        await Promise.all(vatsimData.atis
        .filter((value) => value.callsign.charAt(0) === 'K')
        .map(async(value) => {
            atisList.push({
            airport: value.callsign.slice(0, 4),
            information: value.atis_code,
            metar: await lastValueFrom(this.getMetar(value.callsign.slice(0,4))),
            status: 'Active',
            facility: value.facility.toString(),
            activeApproaches: ['XX'],
            activeDepartures: ['XX']
        });
        }));

        return atisList
    }

    getMetar(id: string): Observable<string> {
        return this.httpModule.get<string>(
            `https://aviationweather.gov/api/data/metar`,
            { params: { ids: id }, responseType: 'text' }
        ).pipe(map((response) => response.data))
    }

    async getVatsimData(): Promise<VATSIMData> {
        const response = await lastValueFrom(this.httpModule.get<VATSIMData>('https://data.vatsim.net/v3/vatsim-data.json'))

        return response.data
    }
}