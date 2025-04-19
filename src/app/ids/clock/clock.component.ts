import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { map, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  imports: [AsyncPipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})

export class ClockComponent {
  private time$ = timer(0, 1000)
  .pipe(
    map(tick => new Date()),
    shareReplay(1)
  )
  protected hours$ = this.time$.pipe(map((t) => t.getUTCHours().toString().padStart(2, "0")))
  protected minutes$ = this.time$.pipe(map((t) => t.getUTCMinutes().toString().padStart(2, "0")))
  protected seconds$ = this.time$.pipe(map((t) => t.getUTCSeconds().toString().padStart(2, "0")))
}

