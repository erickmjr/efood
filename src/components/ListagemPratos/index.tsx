import type PratoClass from '../../models/Prato';
import { Listagem } from '../ListagemPratos/styles';
import Prato from '../Prato';

interface listagemPratosProps {
    pratos: PratoClass[];
}

const ListagemPratos = ({ pratos }: listagemPratosProps) => (
    <Listagem>
        {pratos.map((prato) => (
            <Prato
                key={prato.id}
                titulo={prato.titulo}
                descricao={prato.descricao}
                imagem={prato.imagem}
                valor={prato.valor}
                descricaoModal={prato.descricaoModal}
            ></Prato>
        ))}
    </Listagem>
);

export default ListagemPratos;
