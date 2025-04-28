import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-context-layout',
  imports: [CommonModule],
  templateUrl: './context-layout.component.html',
})
export class ContextLayoutComponent {
  @Input({required: true}) title = ''
}
