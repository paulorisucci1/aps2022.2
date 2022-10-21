import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Filme} from "../../../shared/model/filme";
import {FilmeService} from "../../../shared/services/filme-service";

@Component({
  selector: 'app-listagem-filme',
  templateUrl: './listagem-filme.component.html',
  styleUrls: ['./listagem-filme.component.scss']
})
export class ListagemFilmeComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(public filmeService: FilmeService) {}

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      filmes => this.filmes = filmes
    );
  }
}
