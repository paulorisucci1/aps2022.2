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

  constructor(private usuarioService: UsuarioService, private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => {this.usuarios = usuarios}
    )
  }

  openDialog(id: any): void {
    id = Number(id);
    this.usuarioService.buscar(id).subscribe(usuarioResponse => this.usuario = usuarioResponse);

    this.dialog.open(UserFormDialogComponent, {
      width: '250px',
      data: {
        usuario: this.usuario
      }
    });
  }

  editar(usuario: Usuario): void {
    this.router.navigate(['editarusuario', usuario.id]);
  }

  remover(usuario: Usuario): void {
    const id = Number(usuario.id);
    this.usuarioService.deletar(id).subscribe(
      () => this.ngOnInit()
    );
  }
}
