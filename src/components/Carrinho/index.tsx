import { useSelector } from 'react-redux';
import type { RootReducer } from '../../redux/store';
import {
    CarrinhoStyled,
    ContainerLista,
    ListaCarrinho,
    ContainerValor,
    BtnEntrega,
} from './styles';
import ItemCarrinho from '../ItemCarrinho';
import { useState } from 'react';
import FormEntrega from '../FormEntrega';
import FormPagamento from '../FormPagamento';
import InfosPedido from '../InfosPedido';
import { Overlay } from '../Overlay';

const Carrinho = () => {
    const carrinho = useSelector((state: RootReducer) => state.carrinho);
    let valorTotal: number = 0;

    carrinho.map((item) => (valorTotal += item.preco * item.quantidade));

    const [showCarrinho, setShowCarrinho] = useState(true);
    const [showLista, setShowLista] = useState(true);
    const [showEntrega, setShowEntrega] = useState(false);
    const [showPagamento, setShowPagamento] = useState(false);
    const [showInfosPedido, setShowInfosPedido] = useState(false);

    return (
        <>
            {showCarrinho && (
                <>
                    <Overlay onClick={() => setShowCarrinho(!showCarrinho)} />
                    <CarrinhoStyled>
                        {showInfosPedido ? (
                            <InfosPedido
                                onClick={() => setShowCarrinho(!showCarrinho)}
                            />
                        ) : showPagamento ? (
                            <FormPagamento
                                onClickProximo={() => {
                                    setShowPagamento(!showPagamento);
                                    setShowInfosPedido(!showInfosPedido);
                                }}
                                onClickVoltar={() => {
                                    setShowEntrega(!showEntrega);
                                    setShowPagamento(!showPagamento);
                                }}
                                valor={valorTotal}
                            />
                        ) : showEntrega ? (
                            <>
                                <FormEntrega
                                    onClickProximo={() => {
                                        setShowEntrega(!showEntrega);
                                        setShowPagamento(!showPagamento);
                                    }}
                                    onClickVoltar={() => {
                                        setShowEntrega(!showEntrega);
                                        setShowLista(!showLista);
                                    }}
                                />
                            </>
                        ) : valorTotal > 0 && showLista ? (
                            <>
                                <ContainerLista>
                                    <ListaCarrinho>
                                        {carrinho.map((item) => (
                                            <ItemCarrinho
                                                quantidade={item.quantidade}
                                                nome={item.nome}
                                                preco={item.preco}
                                                foto={item.foto}
                                                id={item.id}
                                            />
                                        ))}
                                    </ListaCarrinho>
                                </ContainerLista>
                                <ContainerValor>
                                    <p>Valor Total</p>
                                    <p>R$ {valorTotal.toFixed(2)}</p>
                                </ContainerValor>
                                <BtnEntrega
                                    type="button"
                                    onClick={() => {
                                        setShowEntrega(!showEntrega);
                                        setShowLista(!showLista);
                                    }}
                                >
                                    Continuar com a entrega
                                </BtnEntrega>
                            </>
                        ) : (
                            <p>Seu carrinho está vazio...</p>
                        )}
                    </CarrinhoStyled>
                </>
            )}
        </>
    );
};

export default Carrinho;
