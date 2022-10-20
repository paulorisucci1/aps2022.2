import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import {BrowserModule} from "@angular/platform-browser";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { ListagemFilmeComponent } from './listagem-filme/listagem-filme.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    CadastroFilmeComponent,
    ListagemFilmeComponent
  ],
  exports: [
    CadastroFilmeComponent,
    ListagemFilmeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListModule,
  ]
})
export class FilmeModule { }
