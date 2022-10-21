import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicaoUsuarioComponent } from './modules/usuario/edicao-usuario/edicao-usuario.component';
import { UserFormDialogComponent } from './modules/usuario/forms/user-form-dialog/user-form-dialog.component';
import { ListagemUsuarioComponent } from './modules/usuario/listagem/listagem.component';
import {ListagemFilmeComponent} from "./modules/filme/listagem-filme/listagem-filme.component";
import {CadastroFilmeComponent} from "./modules/filme/cadastro-filme/cadastro-filme.component";

const routes: Routes = [
  {
    path: 'criarusuario',
    component: UserFormDialogComponent
  },
  {
    path: 'editarusuario/:id',
    component: EdicaoUsuarioComponent
  },
  {
    path: 'listarusuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'listarfilmes',
    component: ListagemFilmeComponent
  },
  {
    path: 'cadastrarFilme',
    component: CadastroFilmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
