import { ButtonStyled } from './styles';

interface BtnDetalhesProps {
    onClick: () => void;
    texto: string;
}

const BtnDetalhes = ({ onClick, texto }: BtnDetalhesProps) => (
    <ButtonStyled type="button" onClick={onClick}>
        {texto}
    </ButtonStyled>
);

export default BtnDetalhes;
