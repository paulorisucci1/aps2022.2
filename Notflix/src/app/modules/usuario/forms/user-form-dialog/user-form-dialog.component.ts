import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '../../../../shared/model/usuario';
import { UsuarioService } from '../../../../shared/services/usuario.service';
import { ListagemUsuarioComponent } from '../../listagem/listagem.component';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {

  titulo = 'Adicionar Usuário' ;
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router, public dialogRef: MatDialogRef<UserFormDialogComponent>) {
    this.usuario = new Usuario();
  }

  inserirUsuario(): void {
    this.usuarioService.adicionar(this.usuario).subscribe(() => {this.dialogRef.close(); window.location.reload()});
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
