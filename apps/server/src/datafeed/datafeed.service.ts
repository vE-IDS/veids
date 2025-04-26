import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map, Observable } from 'rxjs'
import { VATSIMData } from './iterfaces/datafeed.interface';
import ATIS from './dto/atis.dto';

@Injectable()
export class DatafeedService {
    constructor(private readonly httpModule: HttpService) {}

    async getAllAtis(): Promise<ATIS[]> {
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

/*
private ATIS: BehaviorSubject<ATIS[]> = new BehaviorSubject<ATIS[]>([]);
  private http;

  constructor(vatsimService: VatsimService, httpClient: HttpClient) {
    this.http = httpClient;
    vatsimService.getDataObservable().subscribe((data) => {
      this.ATIS.next(this.parseAtisData(data));
      console.log('ATIS updated');
    });
  }

  private parseAtisData(data: VATSIMData): ATIS[] {
    const newATIS: ATIS[] = [];
    data.atis
      .filter((value) => value.callsign.charAt(0) === 'K')
      .map((value) => {
        newATIS.push({
          airport: value.callsign.slice(0, 4),
          information: value.atis_code,
          metar: this.getMetar(value.callsign.slice(0, 4)),
          status: 'Active',
          facility: value.facility.toString(),
        });
      });

    return newATIS;
  }

  getMetar(icao: string): Observable<string> {
    return this.http.get(`/api/weather/metar/${icao}`, {
      responseType: 'text',
      withCredentials: false,
    });
  }

  getAtisSubject(): BehaviorSubject<ATIS[]> {
    return this.ATIS;
  }
*/
