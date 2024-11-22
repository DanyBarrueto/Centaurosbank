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

  Recuperar(){
    this.router.navigate(['/recuperar_password']);
  }

  Perfiles(){
    this.router.navigate(['/perfiles']);
  }

  Cliente(){
    this.router.navigate(['/cliente']);
  }

  Empleado(){
    this.router.navigate(['/empleado']);
  }
}
