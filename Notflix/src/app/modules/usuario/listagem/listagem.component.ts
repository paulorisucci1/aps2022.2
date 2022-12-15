import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../shared/model/usuario';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { Router } from '@angular/router';
import { UserFormDialogComponent } from '../forms/user-form-dialog/user-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {
  usuarios: Array<Usuario> = [];
  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private router: Router, public matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => {this.usuarios = usuarios}
    )
  }

  cadastrar(): void {
    this.matDialog.open(UserFormDialogComponent, {
      width: '250px',
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  atualizar(usuario: Usuario): void {
    this.matDialog.open(UserFormDialogComponent, {
      width: '250px',
      data: usuario
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  remover(usuario: Usuario): void {
    const id = Number(usuario.id);
    this.usuarioService.deletar(id).subscribe(
      () => this.ngOnInit()
    );
  }
}
