export class Usuario {
    id?: string;
    nome?: string;
    email?: string;
    
    constructor(id?: string, usuario: Usuario = {}) {
      this.id = id;
      this.email = usuario.email;
      this.nome = usuario.nome;

    }
}