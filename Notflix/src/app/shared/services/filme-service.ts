import {Filme} from "../model/filme";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class FilmeService {

  private _filmes : Array<Filme>

  URL_FILMES = environment.url+"/filmes"

  constructor(private httpClient: HttpClient) {
    this._filmes = new Array<Filme>();
  }

  public adicionar(filme: Filme) {
    return this.httpClient.post<Filme>(this.URL_FILMES, filme);
  }

  public listar() {
    return this.httpClient.get<Filme[]>(this.URL_FILMES);
  }

  public deletar(id: number | undefined) {
    console.log(this.URL_FILMES+`/${id}`)
    return this.httpClient.delete(this.URL_FILMES+`/${id}`)
  }
}
