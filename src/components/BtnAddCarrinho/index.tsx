import { ButtonStyled } from './styles';

interface BtnDetalhesProps {
    valor: number;
    addCarrinho: () => void;
}

const BtnDetalhes = ({ valor, addCarrinho }: BtnDetalhesProps) => (
    <ButtonStyled type="button" onClick={addCarrinho}>
        Adicionar ao carrinho - R$ {valor.toFixed(2)}
    </ButtonStyled>
);

export default BtnDetalhes;
