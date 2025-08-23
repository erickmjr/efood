import { Link } from 'react-router-dom';
import efood from '../../assets/logos/efood.png';
import { HeaderCardapioStyled } from './styles';
import BtnCarrinho from '../BtnCarrinho';

const HeaderCardapio = () => {
    return (
        <HeaderCardapioStyled>
            <Link to="/">Restaurantes</Link>
            <img src={efood} alt="eFood" />
            <BtnCarrinho />
        </HeaderCardapioStyled>
    );
};

export default HeaderCardapio;
