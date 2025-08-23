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
    imagem: string;
    titulo: string;
    valor: number;
    id: number;
}

const ItemCarrinho = ({ imagem, titulo, valor, id }: itemProps) => {
    const dispatch = useDispatch();
    return (
        <ItemCarrinhoStyled>
            <img src={imagem} alt={titulo} />
            <ContainerItem>
                <h5>{titulo}</h5>
                <p>R$ {valor}</p>
                <ContainerBtn>
                    <BtnRemover
                        onClick={() =>
                            dispatch(
                                remover({
                                    titulo: titulo,
                                    imagem: imagem,
                                    valor: valor,
                                    id: id,
                                }),
                            )
                        }
                    >
                        <img src={lixeira} alt="Apagar" />
                    </BtnRemover>
                </ContainerBtn>
            </ContainerItem>
        </ItemCarrinhoStyled>
    );
};

export default ItemCarrinho;
