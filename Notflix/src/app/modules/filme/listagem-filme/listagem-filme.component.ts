import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import { FilmeFirestoreService } from 'src/app/shared/services/filme-firestore.service';
import {Filme} from "../../../shared/model/filme";
import {FilmeService} from "../../../shared/services/filme-service";

@Component({
  selector: 'app-listagem-filme',
  templateUrl: './listagem-filme.component.html',
  styleUrls: ['./listagem-filme.component.scss']
})
export class ListagemFilmeComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(public filmeService: FilmeFirestoreService) {}

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      filmes => {
        this.filmes = filmes
      }
    );
  }

  remover(filme: Filme): void {
    const id = String(filme.id);
    this.filmeService.deletar(id).subscribe(
      () => this.ngOnInit()
    )
  }
}
