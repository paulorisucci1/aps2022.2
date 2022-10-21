import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarUsuarioComponent } from './modules/usuario/criar-usuario/criar-usuario.component';
import { EdicaoUsuarioComponent } from './modules/usuario/edicao-usuario/edicao-usuario.component';
import { UserFormDialogComponent } from './modules/usuario/forms/user-form-dialog/user-form-dialog.component';
import { ListagemUsuarioComponent } from './modules/usuario/listagem/listagem.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
