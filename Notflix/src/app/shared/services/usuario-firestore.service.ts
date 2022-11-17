import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Usuario} from '../model/usuario';
import {map} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
 providedIn: 'root'
})
export class UsuarioFirestoreService {
 
  repoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';
 
  constructor(private afs: AngularFirestore) {
    this.repoUsuarios = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Usuario[]> {
    return this.repoUsuarios.valueChanges({idField: 'id'});
  }
  
  adicionar(usuario: Usuario): Observable<object> {
    delete usuario.id;
    return from(this.repoUsuarios.add(Object.assign({}, usuario)));
  }
  
  deletar(id: string): Observable<void> {
    return from(this.repoUsuarios.doc(id).delete());
  }
  
  buscar(id: string): Observable<Usuario> {
    return this.repoUsuarios.doc(id).get().pipe(map(document => new Usuario(document.id, document.data())));
  }
  
  atualizar(usuario: Usuario): Observable<void> {
    const id = usuario.id;
    delete usuario.id;
    return from(this.repoUsuarios.doc(id).update(Object.assign({}, usuario)));
  }

}