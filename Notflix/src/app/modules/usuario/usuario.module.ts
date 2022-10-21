import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormDialogComponent } from './forms/user-form-dialog/user-form-dialog.component';
import { EdicaoUsuarioComponent } from './edicao-usuario/edicao-usuario.component';
import { ListagemUsuarioComponent } from './listagem/listagem.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    UserFormDialogComponent,
    EdicaoUsuarioComponent,
    ListagemUsuarioComponent,
    CriarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatDividerModule,
    FormsModule,
    RouterModule

  ],
  exports: [
    UserFormDialogComponent,
    EdicaoUsuarioComponent,
    ListagemUsuarioComponent,
    CriarUsuarioComponent
  ],
  bootstrap: [UserFormDialogComponent, EdicaoUsuarioComponent, ListagemUsuarioComponent]
})
export class UsuarioModule { }
