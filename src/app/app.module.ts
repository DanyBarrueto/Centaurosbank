import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { UsuarioClienteComponent } from './usuario-cliente/usuario-cliente.component';
import { UsuarioEmpleadoComponent } from './usuario-empleado/usuario-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    HomeComponent,
    RegistroComponent,
    RecuperarComponent,
    PerfilesComponent,
    UsuarioClienteComponent,
    UsuarioEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
