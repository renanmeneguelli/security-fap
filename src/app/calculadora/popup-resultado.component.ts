import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-popup-resultado',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Resultado</h2>
    <mat-dialog-content>
      O resultado é: 
      <strong>{{ data.resultado }}</strong>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Fechar</button>
    </mat-dialog-actions>
  `
})
export class PopupResultadoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
