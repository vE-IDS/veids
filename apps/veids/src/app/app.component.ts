import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeUrl, SafeValue } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [MatIconRegistry],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'idsv2';
  protected iconRegistry;
  protected domSanitizer;

  constructor(iconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    this.iconRegistry = iconRegistry;
    this.domSanitizer = domSanitizer;
    this.iconRegistry.addSvgIcon(
      'info',
      domSanitizer.bypassSecurityTrustUrl(
        'https://fonts.googleapis.com/icon?family=Material+Icons'
      )
    );
  }
}
