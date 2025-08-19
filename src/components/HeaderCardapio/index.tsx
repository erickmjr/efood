import { Link } from 'react-router-dom';
import efood from '../../assets/logos/efood.png';
import { HeaderCardapioStyled } from './styles';

const HeaderCardapio = () => (
    <HeaderCardapioStyled>
        <Link to="/">Restaurantes</Link>
        <img src={efood} alt="eFood" />
        <span>0 produto(s) no carrinho</span>
    </HeaderCardapioStyled>
);

export default HeaderCardapio;
