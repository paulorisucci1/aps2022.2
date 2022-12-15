export class Usuario {
    id?: number;
    nome?: string;
    email?: string;

    constructor(id?: number, usuario: Usuario = {}) {
      this.id = id;
      this.email = usuario.email;
      this.nome = usuario.nome;

    }
}
