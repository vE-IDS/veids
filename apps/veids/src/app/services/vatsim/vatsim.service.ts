import { inject, Injectable } from '@angular/core';
import {
  interval,
  Observable,
  share,
  shareReplay,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { VATSIMData } from '../../types/vatsim.type';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VatsimService {
  private data$: Observable<VATSIMData>;
  private http = inject(HttpClient);

  constructor() {
    this.data$ = timer(0, 60000).pipe(
      switchMap(() =>
        this.http.get<VATSIMData>('https://data.vatsim.net/v3/vatsim-data.json')
      )
    );

    this.data$.subscribe(() => console.log('VATSIM datafeed updated'));
  }

  getDataObservable() {
    return this.data$;
  }
}
