import type RestauranteClass from '../../models/Restaurante';
import Restaurante from '../Restaurante';
import { Listagem } from './styles';

interface listagemProps {
    restaurantes: RestauranteClass[];
}

const ListagemRestaurantes = ({ restaurantes }: listagemProps) => (
    <Listagem>
        {restaurantes.map((restaurante) => (
            <Restaurante
                key={restaurante.id}
                titulo={restaurante.titulo}
                descricao={restaurante.descricao}
                img={restaurante.image}
                estrelas={restaurante.estrelas}
                tipo={restaurante.tipo}
                ehDestaque={restaurante.ehDestaque}
            />
        ))}
    </Listagem>
);

export default ListagemRestaurantes;
