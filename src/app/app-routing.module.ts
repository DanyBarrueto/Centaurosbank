import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'ingreso', component:IngresoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
