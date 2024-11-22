import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'centaurosbank';
  constructor(private router:Router){}
  
  IniciarSesion(){
    this.router.navigate(['/ingreso']);
  }

  Registro(){
    this.router.navigate(['/registro']);
  }
}
