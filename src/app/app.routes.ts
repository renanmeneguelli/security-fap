import { Routes } from '@angular/router';
import { Calculadora } from './calculadora/calculadora';

export const routes: Routes = [
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: Calculadora }
];
