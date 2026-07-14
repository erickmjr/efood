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
import type {
    DadosPagamento,
    EnderecoEntrega,
    PedidoResponse,
} from '../../models/Pedido';

const Carrinho = () => {
    const carrinho = useSelector((state: RootReducer) => state.carrinho);
    let valorTotal: number = 0;

    carrinho.map((item) => (valorTotal += item.preco * item.quantidade));

    const [showCarrinho, setShowCarrinho] = useState(true);
    const [showLista, setShowLista] = useState(true);
    const [showEntrega, setShowEntrega] = useState(false);
    const [showPagamento, setShowPagamento] = useState(false);
    const [showInfosPedido, setShowInfosPedido] = useState(false);

    const [dadosEntrega, setDadosEntrega] = useState<EnderecoEntrega | null>(
        null,
    );
    const [pedido, setPedido] = useState<PedidoResponse | null>(null);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const finalizarPedido = async (dadosPagamento: DadosPagamento) => {
        if (!dadosEntrega) return;

        setCarregando(true);
        setErro(null);

        try {
            const resposta = await fetch(
                'https://api-ebac.vercel.app/api/efood/checkout',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        products: carrinho.map((item) => ({
                            id: item.id,
                            price: item.preco,
                        })),
                        delivery: dadosEntrega,
                        payment: dadosPagamento,
                    }),
                },
            );

            if (!resposta.ok) {
                throw new Error('Não foi possível finalizar o pedido');
            }

            const dados: PedidoResponse = await resposta.json();

            setPedido(dados);
            setShowPagamento(false);
            setShowInfosPedido(true);
        } catch {
            setErro('Não foi possível finalizar o pedido. Tente novamente.');
        } finally {
            setCarregando(false);
        }
    };

    return (
        <>
            {showCarrinho && (
                <>
                    <Overlay onClick={() => setShowCarrinho(!showCarrinho)} />
                    <CarrinhoStyled>
                        {showInfosPedido ? (
                            <InfosPedido
                                pedido={pedido}
                                onClick={() => setShowCarrinho(!showCarrinho)}
                            />
                        ) : showPagamento ? (
                            <FormPagamento
                                carregando={carregando}
                                erro={erro}
                                onClickProximo={finalizarPedido}
                                onClickVoltar={() => {
                                    setShowEntrega(!showEntrega);
                                    setShowPagamento(!showPagamento);
                                }}
                                valor={valorTotal}
                            />
                        ) : showEntrega ? (
                            <>
                                <FormEntrega
                                    onClickProximo={(dados) => {
                                        setDadosEntrega(dados);
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
