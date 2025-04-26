import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-button',
  imports: [RouterModule, NgIf],
  templateUrl: './footer-button.component.html',
  styles: `
  .link {
    width: 160px;
    height: 10px;
    background-color: #0249C6;
    border: 2px #141414;
  }
  `,
})
export class FooterButtonComponent {
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) href: string = '';
  @Input() disabled: boolean = false;
}
