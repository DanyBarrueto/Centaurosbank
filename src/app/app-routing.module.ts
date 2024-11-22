import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { UsuarioClienteComponent } from './usuario-cliente/usuario-cliente.component';
import { UsuarioEmpleadoComponent } from './usuario-empleado/usuario-empleado.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'ingreso', component:IngresoComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'recuperar_password', component:RecuperarComponent},
  {path: 'perfiles', component:PerfilesComponent},
  {path: 'cliente', component:UsuarioClienteComponent},
  {path: 'empleado', component:UsuarioEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
