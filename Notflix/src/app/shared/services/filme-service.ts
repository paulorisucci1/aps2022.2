import {Filme} from "../model/filme";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FilmeService {

  private _filmes : Array<Filme>

  constructor() {
    this._filmes = new Array<Filme>();
  }

  public cadastrar(filme: Filme) {
    this._filmes.push(filme);
  }

  public listar() {
    return this._filmes;
  }
}
