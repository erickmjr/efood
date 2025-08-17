import efood from '../../assets/logos/efood.png';
import { HeaderStyled } from './styles';

const Header = () => (
    <HeaderStyled>
        <img src={efood} alt="eFood" />
        <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </HeaderStyled>
);

export default Header;
