import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  numCats!: number;
  diasAfastamento!: number;
  beneficiosB91!: number;
  beneficiosB31!: number;
  cnae!: string;
  fap!: number;
  rotatividade!: number;

  constructor(private dialog: MatDialog) {}

  calcular() {
  const massa = this.massaSalarial || 1;

  // Índice de Frequência
  const IF = (this.numCats || 0) / massa;

  // Índice de Gravidade
  const IG = (
    (this.diasAfastamento || 0) +
    (this.beneficiosB91 || 0) * 365 +
    (this.beneficiosB31 || 0) * 15
  ) / massa;

  // Índice de Custo
  const IC = (
    (this.beneficiosB91 || 0) * 0.91 +
    (this.beneficiosB31 || 0) * 0.31
  ) / massa;

  // Índice de Rotatividade
  const IR = (this.rotatividade || 0) / massa;

  // Soma dos índices
  const risco = IF + IG + IC;

  // FAP final aplicado
  const fapFinal = risco * (this.fap || 1);

  this.dialog.open(PopupResultadoComponent, {
    data: {
      resultado: `
        IF = ${IF.toFixed(6)}
        IG = ${IG.toFixed(6)}
        IC = ${IC.toFixed(6)}
        IR = ${IR.toFixed(6)}
        Risco Total = ${risco.toFixed(6)}
        FAP Final = ${fapFinal.toFixed(6)}
      `
    }
  });
}

}