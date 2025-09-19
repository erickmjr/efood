import type { RestauranteAPI } from '../../models/RestauranteInterface';
import { Listagem } from '../ListagemPratos/styles';
import Prato from '../Prato';

type Cardapio = Pick<RestauranteAPI, 'cardapio'>;

const ListagemPratos = ({ cardapio }: Cardapio) => {
    return (
        <Listagem>
            {cardapio.map((prato, index) => (
                <Prato
                    key={prato.id ?? index}
                    titulo={prato.nome}
                    descricao={prato.descricao}
                    valor={prato.preco}
                    foto={prato.foto}
                    porcao={prato.porcao}
                ></Prato>
            ))}
        </Listagem>
    );
};

export default ListagemPratos;
