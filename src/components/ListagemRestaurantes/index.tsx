import type { RestauranteType } from '../../models/Restaurante';
import Restaurante from '../Restaurante';
import { Listagem } from './styles';

interface listagemProps {
    restaurantes: RestauranteType[];
}

const ListagemRestaurantes = ({ restaurantes }: listagemProps) => (
    <Listagem>
        {restaurantes.map((restaurante) => (
            <Restaurante
                key={restaurante.id}
                id={restaurante.id}
                titulo={restaurante.titulo}
                descricao={restaurante.descricao}
                capa={restaurante.capa}
                avaliacao={restaurante.avaliacao}
                tipo={restaurante.tipo}
                destacado={restaurante.destacado}
            />
        ))}
    </Listagem>
);

export default ListagemRestaurantes;
