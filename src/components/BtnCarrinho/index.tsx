import type { RootReducer } from '../../redux/store';
import { useSelector } from 'react-redux';
import { BtnCarrinhoStyled } from './styles';
import { useState } from 'react';
import Carrinho from '../Carrinho';

const BtnCarrinho = () => {
    const qtdItens = useSelector((state: RootReducer) => state.carrinho.length);

    const [showCarrinho, setShowCarrinho] = useState(false);

    return (
        <>
            <BtnCarrinhoStyled onClick={() => setShowCarrinho(!showCarrinho)}>
                {qtdItens} produto(s) no carrinho
            </BtnCarrinhoStyled>

            {showCarrinho && (
                <>
                    <Carrinho />
                </>
            )}
        </>
    );
};

export default BtnCarrinho;
