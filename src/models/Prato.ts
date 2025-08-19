class PratoClass {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    valor: number;
    descricaoModal: string;

    constructor(
        id: number,
        titulo: string,
        descricao: string,
        imagem: string,
        valor: number,
        descricaoModal: string,
    ) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.imagem = imagem;
        this.valor = valor;
        this.descricaoModal = descricaoModal;
    }
}

export default PratoClass;
