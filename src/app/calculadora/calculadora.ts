import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

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
    MatDialogModule,
    MatSelectModule
  ],
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.css']
})
export class Calculadora {

  massaSalarial!: number;
  cnae!: number;
  rat!: number;
  fat!: number;

  constructor(private dialog: MatDialog) {}

  calcular() {

    if (
    this.massaSalarial == null ||
    this.rat == null ||
    this.fat == null
  ) {
    alert('Preencha todos os campos obrigatórios.');
    return;
  }

    let fapMinimo = 0.5;
    let fapMaximo = 2.0;

    if (this.fat < fapMinimo || this.fat > fapMaximo) {
      alert(`O valor do FAT deve estar entre ${fapMinimo} e ${fapMaximo}.`);
      return;
    }  
    const massa = this.massaSalarial || 0;
    const ratDecimal = (this.rat || 0) / 100;

    if (ratDecimal == 0.01){
        fapMaximo = 1.5;
    } else if (ratDecimal == 0.02) {
        fapMaximo = 2.0;
    } else if (ratDecimal == 0.03) {
        fapMaximo = 2.0;
    }; 

    const fatAjustado = Math.min(Math.max(this.fat, fapMinimo), fapMaximo);

    const resultadoFinal = massa * ratDecimal * fatAjustado;
    let incumprimento = 0;
    let retorno = "Valor a  (R$):";

    if (resultadoFinal >= 2) {
        incumprimento = (massa * resultadoFinal) / 12;
        retorno = "Neglicência (R$)";
    } else {
        incumprimento = (massa * resultadoFinal) / 14;
        retorno = "Bônus (R$)";
    };

    this.dialog.open(PopupResultadoComponent, {
      data: {
        resultado: `
          RAT Ajustada (%): ${resultadoFinal.toFixed(1)}\n
          ${retorno}: ${incumprimento.toFixed(3)}
  `
      }
    });
  }
}