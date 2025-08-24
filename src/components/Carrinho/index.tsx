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

const Carrinho = () => {
    const carrinho = useSelector((state: RootReducer) => state.carrinho);
    let valorTotal: number = 0;

    carrinho.map((item) => (valorTotal += item.valor));

    return (
        <>
            <CarrinhoStyled>
                <ContainerLista>
                    <ListaCarrinho>
                        {carrinho.map((item) => (
                            <ItemCarrinho
                                titulo={item.titulo}
                                valor={item.valor}
                                imagem={item.imagem}
                                id={item.id}
                            />
                        ))}
                    </ListaCarrinho>
                </ContainerLista>
                {valorTotal > 0 ? (
                    <>
                        <ContainerValor>
                            <p>Valor Total</p>
                            <p>R$ {valorTotal.toFixed(2)}</p>
                        </ContainerValor>
                        <BtnEntrega type="button">
                            Continuar com a entrega
                        </BtnEntrega>
                    </>
                ) : (
                    <p>Seu carrinho está vazio...</p>
                )}
            </CarrinhoStyled>
        </>
    );
};

export default Carrinho;
