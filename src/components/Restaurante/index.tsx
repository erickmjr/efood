import star from '../../assets/icons/star.png';
import BtnSaibaMais from '../BtnSaibaMais';
import {
    ContainerImg,
    ContainerInfos,
    ContainerRestaurante,
    InfosGerais,
} from './styles';
import type { RestauranteType } from '../../models/Restaurante';

const Restaurante = ({
    id,
    titulo,
    descricao,
    capa,
    avaliacao,
    tipo,
    destacado,
}: Omit<RestauranteType, 'cardapio'>) => {
    return (
        <ContainerRestaurante>
            <ContainerImg img={capa}>
                {destacado ? <p>Destaque da semana</p> : null}
                <p>{tipo}</p>
            </ContainerImg>
            <ContainerInfos>
                <InfosGerais>
                    <h4>{titulo}</h4>
                    <span>
                        {avaliacao}
                        <img src={star} alt={`${avaliacao} estrelas`} />
                    </span>
                </InfosGerais>
                <p>{descricao}</p>
                <BtnSaibaMais destino={id} />
            </ContainerInfos>
        </ContainerRestaurante>
    );
};

export default Restaurante;
