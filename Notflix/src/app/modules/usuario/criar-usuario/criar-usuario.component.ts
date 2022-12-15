import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from '../forms/user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(UserFormDialogComponent, {
      width: '250px'
    });
  }
}
