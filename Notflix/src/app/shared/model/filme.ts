export class Filme {

  constructor(
              private _titulo: string,
              private _dataLancamento: string,
              private _id: number,
              private _duracao?: number,
              private _descricao?: string) {
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

  get id(): number{
    return this._id;
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

  set id(value: number) {
    this._id = value;
  }
}
