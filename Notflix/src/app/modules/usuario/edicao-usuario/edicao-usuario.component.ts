import { Component } from '@angular/core';
import { Usuario } from '../../../shared/model/usuario';
import {MatDialog} from "@angular/material/dialog";
import {UserFormDialogComponent} from "../forms/user-form-dialog/user-form-dialog.component";

@Component({
  selector: 'user-edicao',
  templateUrl: './edicao-usuario.component.html',
  styleUrls: ['./edicao-usuario.component.scss']
})
export class EdicaoUsuarioComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(usuario: Usuario): void {
    this.dialog.open(UserFormDialogComponent, {
      width: '250px',
      data: usuario
    });
  }

}
