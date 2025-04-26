import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atis-divider',
  imports: [],
  templateUrl: './atis-divider.component.html',
  styleUrl: './atis-divider.component.css',
})
export class AtisDividerComponent {
  @Input({ required: true }) facility: string = '';
}
