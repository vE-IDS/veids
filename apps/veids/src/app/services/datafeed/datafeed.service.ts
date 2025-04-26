import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, switchMap, timer } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class DatafeedService {
    private atis$: Observable<ATIS[]>

    constructor(private readonly http: HttpClient) {
        this.atis$ = timer(0, 60000)
        .pipe(
            switchMap(() => http.get<ATIS[]>('/api/datafeed/atis'))
        )
    }
    
    getATISObservable(): Observable<ATIS[]> {
        return this.atis$
    }
}

export interface ATIS {
    airport: string;
    information?: string;
    metar: string;
    status?: string;
    facility: string;
    activeApproaches?: string[];
    activeDepartures?: string[];
}