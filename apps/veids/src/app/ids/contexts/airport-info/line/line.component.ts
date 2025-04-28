import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line',
  imports: [CommonModule],
  templateUrl: './line.component.html',
})
export class LineComponent {
  @Input({required: true}) title = ''
}
