import { StyledLink } from './styles';
type Props = {
    destino: number;
};

const BtnSaibaMais = ({ destino }: Props) => (
    <StyledLink to={`/cardapio/${destino}`}>Saiba mais</StyledLink>
);

export default BtnSaibaMais;
