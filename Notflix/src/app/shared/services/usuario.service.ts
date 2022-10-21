import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  DB_USUARIOS = 'http://localhost:3000/usuarios';

  constructor(private clienteHttp: HttpClient) {}

  listar(): Observable<Usuario[]> 
  {
    return this.clienteHttp.get<Usuario[]>(this.DB_USUARIOS);
  }

  adicionar(usuario: Usuario): Observable<Usuario>
  {
    return this.clienteHttp.post<Usuario>(this.DB_USUARIOS, usuario);
  }

  deletar(id: number): Observable<object>
  {
    console.log(this.DB_USUARIOS+`/${id}`);
    return this.clienteHttp.delete(this.DB_USUARIOS+`/${id}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario> 
  {
    return this.clienteHttp.put<Usuario>(this.DB_USUARIOS+`/${usuario.id}`, usuario);
  }

  buscar(id: number): Observable<Usuario> 
  {
    return this.clienteHttp.get<Usuario>(this.DB_USUARIOS+`/${id}`);
  }
}
