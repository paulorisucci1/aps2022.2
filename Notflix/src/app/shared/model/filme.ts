export class Filme {
  id?: number;
  dataLancamento?: Date;
  titulo?: string;
  descricao?: string;
  duracao?: number;

  constructor(id?: number, filme: Filme = {}) {
    this.id = id;
    this.dataLancamento = filme.dataLancamento;
    this.titulo = filme.titulo;
    this.descricao = filme.descricao;
    this.duracao = filme.duracao;

  }
}
