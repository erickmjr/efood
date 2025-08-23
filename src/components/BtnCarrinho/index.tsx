import type { RootReducer } from '../../redux/store';
import { useSelector } from 'react-redux';
import { BtnCarrinhoStyled } from './styles';

const BtnCarrinho = () => {
    const qtdItens = useSelector((state: RootReducer) => state.carrinho.length);

    return (
        <BtnCarrinhoStyled>{qtdItens} produto(s) no carrinho</BtnCarrinhoStyled>
    );
};

export default BtnCarrinho;
