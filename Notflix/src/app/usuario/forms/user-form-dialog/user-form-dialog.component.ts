import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/shared/model/usuario';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {

  titulo = 'Editar Usuário' ;
  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor( public dialogRef: MatDialogRef<UserFormDialogComponent>) {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
   }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    console.log(this.usuario);
    this.usuario = new Usuario();
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
