export class Filme {

  constructor(
              public _titulo: string,
              public _dataLancamento: string,
              public _duracao?: number,
              public _descricao?: string,
              public id?: number) {
  }

  get titulo(): string {
    return this._titulo;
  }

  get duracao(): number | undefined {
    return this._duracao;
  }

  get descricao(): string | undefined {
    return this._descricao;
  }

  get dataLancamento(): string {
    return this._dataLancamento;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  set duracao(value: number | undefined) {
    this._duracao = value;
  }

  set dataLancamento(value: string) {
    this._dataLancamento = value;
  }

  set descricao(value: string | undefined) {
    this._descricao = value;
  }
}
