import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'centaurosbank';
  constructor(private router: Router) {}

  IniciarSesion() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/ingreso'])
    );
    window.open(url, '_blank');
  }
}
