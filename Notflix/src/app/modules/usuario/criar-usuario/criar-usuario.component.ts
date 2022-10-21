import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserFormDialogComponent } from '../forms/user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '250px'
    });
  }

  ngOnInit(): void {
  }
}
