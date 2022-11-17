import { Injectable } from '@angular/core';
import { Filme } from '../model/filme';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FilmeFirestoreService {
  repoFilmes: AngularFirestoreCollection<Filme>;
  NOME_COLECAO = 'filmes';
 
  constructor(private afs: AngularFirestore) {
    this.repoFilmes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Filme[]> {
    return this.repoFilmes.valueChanges({idField: 'id'});
  }
  
  adicionar(filme: Filme): Observable<object> {
    delete filme.id;
    return from(this.repoFilmes.add(Object.assign({}, filme)));
  }
  
  deletar(id: string): Observable<void> {
    return from(this.repoFilmes.doc(id).delete());
  }
  
  buscar(id: string): Observable<Filme> {
    return this.repoFilmes.doc(id).get().pipe(map(document => new Filme(document.id, document.data())));
  }
  
  atualizar(filme: Filme): Observable<void> {
    const id = filme.id;
    delete filme.id;
    return from(this.repoFilmes.doc(id).update(Object.assign({}, filme)));
  }

}
