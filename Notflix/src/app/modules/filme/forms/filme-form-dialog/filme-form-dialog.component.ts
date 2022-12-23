import {Component, Inject, OnInit} from '@angular/core';
import {Filme} from "../../../../shared/model/filme";
import {FilmeService} from "../../../../shared/services/filme-service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-filme-form-dialog',
  templateUrl: './filme-form-dialog.component.html',
  styleUrls: ['./filme-form-dialog.component.scss']
})
export class FilmeFormDialogComponent implements OnInit {

  filme = new Filme();

  constructor(private filmeService: FilmeService, public dialogRef: MatDialogRef<FilmeFormDialogComponent>, @Inject(MAT_DIALOG_DATA) data:Filme) {
    if(data) {
      this.filme = data;
    }

  }

  ngOnInit(): void {
  }

  cadastrarFilme(): void {
    if(!this.filme.id) {
      this.filmeService.adicionar(this.filme).subscribe(() => this.dialogRef.close());
    } else {
      this.filmeService.atualizar(this.filme).subscribe(() => this.dialogRef.close());
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
