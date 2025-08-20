import { ButtonStyled } from './styles';

interface BtnDetalhesProps {
    onClick: () => void;
}

const BtnDetalhes = ({ onClick }: BtnDetalhesProps) => (
    <ButtonStyled type="button" onClick={onClick}>
        Mais detalhes
    </ButtonStyled>
);

export default BtnDetalhes;
