import { ButtonStyled } from './styles';

interface BtnDetalhesProps {
    valor: number;
}

const BtnDetalhes = ({ valor }: BtnDetalhesProps) => (
    <ButtonStyled type="button">
        Adicionar ao carrinho - R$ {valor}
    </ButtonStyled>
);

export default BtnDetalhes;
