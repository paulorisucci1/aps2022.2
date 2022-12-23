import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = environment.url+'/usuarios';

  constructor(private clienteHttp: HttpClient) {}

  listar(): Observable<Usuario[]>
  {
    return this.clienteHttp.get<Usuario[]>(this.URL_USUARIOS);
  }

  adicionar(usuario: Usuario): Observable<Usuario>
  {
    return this.clienteHttp.post<Usuario>(this.URL_USUARIOS, usuario);
  }

  deletar(id: number): Observable<object>
  {
    console.log(this.URL_USUARIOS+`/${id}`);
    return this.clienteHttp.delete(this.URL_USUARIOS+`/${id}`);
  }

  atualizar(usuario: Usuario): Observable<Usuario>
  {
    return this.clienteHttp.put<Usuario>(this.URL_USUARIOS+`/${usuario.id}`, usuario);
  }

  buscar(id: number): Observable<Usuario>
  {
    return this.clienteHttp.get<Usuario>(this.URL_USUARIOS+`/${id}`);
  }

}
