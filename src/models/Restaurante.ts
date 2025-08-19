class RestauranteClass {
    titulo: string;
    estrelas: number;
    descricao: string;
    tipo: string;
    image: string;
    id: number;
    ehDestaque: boolean;

    constructor(
        titulo: string,
        estrelas: number,
        descricao: string,
        tipo: string,
        image: string,
        id: number,
        ehDestaque: boolean,
    ) {
        this.titulo = titulo;
        this.estrelas = estrelas;
        this.descricao = descricao;
        this.tipo = tipo;
        this.image = image;
        this.id = id;
        this.ehDestaque = ehDestaque;
    }
}

export default RestauranteClass;
