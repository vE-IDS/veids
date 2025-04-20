import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Input({required: true}) title: string = ''
  @Input({required: true}) size: number = 0
}
