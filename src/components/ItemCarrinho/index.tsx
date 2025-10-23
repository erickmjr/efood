import lixeira from '../../assets/icons/lixeira.png';
import { useDispatch } from 'react-redux';

import { remover } from '../../redux/reducers/carrinho';
import {
    BtnRemover,
    ContainerBtn,
    ContainerItem,
    ItemCarrinhoStyled,
} from './styles';

interface itemProps {
    foto: string;
    nome: string;
    preco: number;
    id: number;
    quantidade: number;
}

const ItemCarrinho = ({ foto, nome, preco, id, quantidade }: itemProps) => {
    const dispatch = useDispatch();
    return (
        <ItemCarrinhoStyled>
            <img src={foto} alt={nome} />
            <ContainerItem>
                <h5>{nome}</h5>
                <p>R$ {preco.toFixed(2)}</p>
                <p>Quantidade: {quantidade}</p>
                <ContainerBtn>
                    {
                        <BtnRemover
                            onClick={() =>
                                dispatch(
                                    remover({
                                        nome,
                                        foto,
                                        preco,
                                        id,
                                    }),
                                )
                            }
                        >
                            <img src={lixeira} alt="Apagar" />
                        </BtnRemover>
                    }
                </ContainerBtn>
            </ContainerItem>
        </ItemCarrinhoStyled>
    );
};

export default ItemCarrinho;
