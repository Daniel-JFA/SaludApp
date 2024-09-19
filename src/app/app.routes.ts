import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { PesoComponent } from './peso/peso.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { SignosVitalesComponent } from './signos-vitales/signos-vitales.component';
import { FinalComponent } from './final/final.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'identificacion', component: IdentificacionComponent },
  { path: 'peso', component: PesoComponent },
  { path: 'temperatura', component: TemperaturaComponent },
  { path: 'signos-vitales', component: SignosVitalesComponent },
  { path: 'final', component: FinalComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
