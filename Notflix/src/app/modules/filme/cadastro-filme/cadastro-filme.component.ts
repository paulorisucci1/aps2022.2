import { Component, OnInit } from '@angular/core';
import {FilmeService} from "../../../shared/services/filme-service";
import {Filme} from "../../../shared/model/filme";

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.scss'],
})
export class CadastroFilmeComponent implements OnInit {

  novoFilme: Filme;

  constructor(private filmeService: FilmeService) {
    this.novoFilme = new Filme('', '');
  }

  ngOnInit(): void {
  }

  cadastrarFilme() {
    this.filmeService.cadastrar(this.novoFilme);
    this.novoFilme = new Filme('', '');
  }
}
