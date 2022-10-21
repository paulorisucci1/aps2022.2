import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FilmeFormDialogComponent} from "../forms/filme-form-dialog/filme-form-dialog.component";

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.scss'],
})
export class CadastroFilmeComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog(): void {
    this.dialog.open(FilmeFormDialogComponent, {
      width: '300px'
    });
  }

  ngOnInit(): void{
  }
}
