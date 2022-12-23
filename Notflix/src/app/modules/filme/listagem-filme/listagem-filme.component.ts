import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Filme} from "../../../shared/model/filme";
import {FilmeService} from "../../../shared/services/filme-service";
import {MatDialog} from "@angular/material/dialog";
import {UserFormDialogComponent} from "../../usuario/forms/user-form-dialog/user-form-dialog.component";
import {FilmeFormDialogComponent} from "../forms/filme-form-dialog/filme-form-dialog.component";

@Component({
  selector: 'app-listagem-filme',
  templateUrl: './listagem-filme.component.html',
  styleUrls: ['./listagem-filme.component.scss']
})
export class ListagemFilmeComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(public filmeService: FilmeService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      filmes => {
        this.filmes = filmes
      }
    );
  }

  remover(filme: Filme): void {
    const id = filme.id;
    this.filmeService.deletar(id).subscribe(
      () => this.ngOnInit()
    )
  }

  cadastrar(): void {
    this.matDialog.open(FilmeFormDialogComponent, {
      width: '250px'
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  atualizar(filme: Filme): void {
    this.matDialog.open(FilmeFormDialogComponent, {
      width: '250px',
      data: filme
    }).afterClosed().subscribe(() => this.ngOnInit());
  }
}
