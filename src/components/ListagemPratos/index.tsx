import PratoClass from '../../models/Prato';
import Prato from '../Prato';
import { Listagem } from './styles';

interface listagemProps {
    pratos: PratoClass[];
}

const ListagemPratos = ({ pratos }: listagemProps) => (
    <Listagem>
        {pratos.map((prato) => (
            <Prato
                key={prato.id}
                titulo={prato.titulo}
                descricao={prato.descricao}
                img={prato.image}
                estrelas={prato.estrelas}
                tipo={prato.tipo}
                ehDestaque={prato.ehDestaque}
            />
        ))}
    </Listagem>
);

export default ListagemPratos;
