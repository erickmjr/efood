import type { RestauranteType } from '../../models/Restaurante';
import { Listagem } from '../ListagemPratos/styles';
import Prato from '../Prato';

type Cardapio = Pick<RestauranteType, 'cardapio'>;

const ListagemPratos = ({ cardapio }: Cardapio) => {
    return (
        <Listagem>
            {cardapio.map((prato, index) => (
                <Prato
                    key={prato.id ?? index}
                    id={prato.id}
                    nome={prato.nome}
                    descricao={prato.descricao}
                    preco={prato.preco}
                    foto={prato.foto}
                    porcao={prato.porcao}
                    quantidade={prato.quantidade}
                ></Prato>
            ))}
        </Listagem>
    );
};

export default ListagemPratos;
