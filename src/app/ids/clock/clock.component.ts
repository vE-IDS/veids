import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { map, Observable, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  imports: [AsyncPipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})

export class ClockComponent {
  private time$: Observable<Date>
  protected hours$: Observable<string>
  protected minutes$: Observable<string>
  protected seconds$: Observable<string>

  constructor () {
    this.time$ = timer(0, 1000)
    .pipe(
      map(tick => new Date()),
      shareReplay(1)
    )
    this.hours$ = this.time$.pipe(map((t) => t.getUTCHours().toString().padStart(2, "0")))
    this.minutes$ = this.time$.pipe(map((t) => t.getUTCMinutes().toString().padStart(2, "0")))
    this.seconds$ = this.time$.pipe(map((t) => t.getUTCSeconds().toString().padStart(2, "0")))
  }

}

