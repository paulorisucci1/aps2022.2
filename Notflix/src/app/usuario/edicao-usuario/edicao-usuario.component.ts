import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserFormDialogComponent } from '../forms/user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'user-edicao',
  templateUrl: './edicao-usuario.component.html',
  styleUrls: ['./edicao-usuario.component.scss']
})
export class EdicaoUsuarioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

  ngOnInit(): void {
  }

}
