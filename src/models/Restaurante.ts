import type { Prato } from './Prato';

export type RestauranteType = {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: Prato[];
};
