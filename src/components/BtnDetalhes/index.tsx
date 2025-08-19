import { ButtonStyled } from './styles';

interface BtnDetalhesProps {
    onClick: () => void;
}

const BtnDetalhes = ({ onClick }: BtnDetalhesProps) => {
    return (
        <ButtonStyled type="button" onClick={onClick}>
            Adicionar ao carrinho
        </ButtonStyled>
    );
};

export default BtnDetalhes;
