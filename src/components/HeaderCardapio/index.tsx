import { Link } from 'react-router-dom';
import efood from '../../assets/logos/efood.png';
import { Container, HeaderCardapioStyled } from './styles';
import BtnCarrinho from '../BtnCarrinho';

const HeaderCardapio = () => {
    return (
        <HeaderCardapioStyled>
            <Container>
                <Link to="/">Restaurantes</Link>
                <img src={efood} alt="eFood" />
                <BtnCarrinho />
            </Container>
        </HeaderCardapioStyled>
    );
};

export default HeaderCardapio;
