import {Filme} from "../model/filme";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FilmeService {

  private _filmes : Array<Filme>

  URL_FILMES = "http://localhost:3000/filmes"

  constructor(private httpClient: HttpClient) {
    this._filmes = new Array<Filme>();
  }

  public cadastrar(filme: Filme) {
    return this.httpClient.post<Filme>(this.URL_FILMES, filme);
  }

  public listar() {
    return this.httpClient.get<Filme[]>(this.URL_FILMES);
  }

  public remover(id: number) {
    console.log(this.URL_FILMES+`/${id}`)
    return this.httpClient.delete(this.URL_FILMES+`/${id}`)
  }
}
