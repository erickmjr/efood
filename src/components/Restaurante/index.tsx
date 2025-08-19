import star from '../../assets/icons/star.png';
import BtnSaibaMais from '../BtnSaibaMais';
import {
    ContainerImg,
    ContainerInfos,
    ContainerRestaurante,
    InfosGerais,
} from './styles';

export type RestauranteProps = {
    titulo: string;
    tipo: string;
    estrelas: number;
    descricao: string;
    img: string;
    ehDestaque: boolean;
};

const Restaurante = ({
    titulo,
    tipo,
    estrelas,
    descricao,
    img,
    ehDestaque,
}: RestauranteProps) => (
    <ContainerRestaurante>
        <ContainerImg img={img}>
            {ehDestaque ? <p>Destaque da semana</p> : null}
            <p>{tipo}</p>
        </ContainerImg>
        <ContainerInfos>
            <InfosGerais>
                <h4>{titulo}</h4>
                <span>
                    {estrelas}
                    <img src={star} alt="Estrela" />
                </span>
            </InfosGerais>
            <p>{descricao}</p>
            <BtnSaibaMais />
        </ContainerInfos>
    </ContainerRestaurante>
);

export default Restaurante;
