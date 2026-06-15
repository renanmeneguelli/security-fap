import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { PopupResultadoComponent } from './popup-resultado.component';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.css']
})
export class Calculadora {

  massaSalarial!: number;
  cnae!: number;
  fap!: number;

  constructor(private dialog: MatDialog) {}

  calcular() {

    const massa = this.massaSalarial || 0;
    const cnae = this.cnae || 1;

    const resultadoFinal = (massa * cnae) / 100;

    this.dialog.open(PopupResultadoComponent, {
      data: {
        resultado: `
          FAP: ${resultadoFinal.toFixed(3)}
        `
      }
    });
  }
}