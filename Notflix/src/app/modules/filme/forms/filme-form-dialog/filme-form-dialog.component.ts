import { Component, OnInit } from '@angular/core';
import {Filme} from "../../../../shared/model/filme";
import {FilmeService} from "../../../../shared/services/filme-service";
import {MatDialogRef} from "@angular/material/dialog";
import { FilmeFirestoreService } from 'src/app/shared/services/filme-firestore.service';

@Component({
  selector: 'app-filme-form-dialog',
  templateUrl: './filme-form-dialog.component.html',
  styleUrls: ['./filme-form-dialog.component.scss']
})
export class FilmeFormDialogComponent implements OnInit {

  novoFilme: Filme;

  constructor(private filmeService: FilmeFirestoreService, public dialogRef: MatDialogRef<FilmeFormDialogComponent>) {
    this.novoFilme = new Filme();
  }

  ngOnInit(): void {
  }

  cadastrarFilme() {
    this.filmeService.adicionar(this.novoFilme).subscribe(
      () => {this.dialogRef.close(); window.location.reload()});
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
