import { Component } from '@angular/core';
import { ClockComponent } from "../clock/clock.component";

@Component({
  selector: 'app-navbar',
  imports: [ClockComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
