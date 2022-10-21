import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../shared/model/usuario';
import { UsuarioService } from '../../../shared/services/usuario.service';

@Component({
  selector: 'user-edicao',
  templateUrl: './edicao-usuario.component.html',
  styleUrls: ['./edicao-usuario.component.scss']
})
export class EdicaoUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService ,private router: Router, private rota: ActivatedRoute) {
    const id = Number(this.rota.snapshot.paramMap.get('id'));
    this.usuarioService.buscar(id).subscribe(
      usuarioResponse => this.usuario = usuarioResponse
    );
  }

  salvarUsuario()
  {
    this.usuarioService.atualizar(this.usuario).subscribe(
      usuarioAlterado => {
        console.log(usuarioAlterado);
        this.router.navigate(["/listarusuarios"]);
      });

      this.router.navigate(["/listarusuarios"]);
      console.log('teste');
  }

  cancelar() {
    this.router.navigate(['listarusuarios']);
  }

  ngOnInit(): void {
    console.log('teste');
  }

}
