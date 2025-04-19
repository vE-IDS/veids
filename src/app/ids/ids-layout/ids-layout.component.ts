import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ids-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './ids-layout.component.html',
})

export class IdsLayoutComponent {
  
}
