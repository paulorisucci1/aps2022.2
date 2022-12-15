import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '../../../../shared/model/usuario';
import {UsuarioService} from "../../../../shared/services/usuario.service";

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {

  public titulo = 'Adicionar Usuário';
  public usuario = new Usuario(undefined, {email: '', nome: ''});

  constructor(private usuarioService: UsuarioService, private router: Router, public dialogRef: MatDialogRef<UserFormDialogComponent>,
              @Inject(MAT_DIALOG_DATA) data: Usuario) {
    if (data) {
      this.usuario = data;
    }
  }

  inserirOuAlterarUsuario(): void {
    if(!this.usuario.id) {
      this.usuarioService.adicionar(this.usuario).subscribe(() => {this.dialogRef.close();});
    } else {
      this.usuarioService.atualizar(this.usuario).subscribe(() => {this.dialogRef.close();})
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
