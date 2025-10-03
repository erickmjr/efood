import BtnAddCarrinho from '../BtnAddCarrinho';
import { ContainerInfos, ContainerNomeBtn, ModalStyled } from './styles';
import { useDispatch } from 'react-redux';
import { adicionar } from '../../redux/reducers/carrinho';
interface ModalProps {
    id: number;
    foto: string;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
    quantidade: number;
    onClose: () => void;
}

const Modal = ({
    id,
    foto,
    nome,
    descricao,
    preco,
    porcao,
    quantidade,
    onClose,
}: ModalProps) => {
    const dispatch = useDispatch();

    return (
        <ModalStyled>
            <img src={foto} alt={nome} />
            <ContainerInfos>
                <ContainerNomeBtn>
                    <h4>{nome}</h4>
                    <button type="button" onClick={() => onClose()}>
                        X
                    </button>
                </ContainerNomeBtn>
                <p>{descricao}</p>
                <p>Serve: {porcao}</p>
                {
                    <BtnAddCarrinho
                        valor={preco}
                        addCarrinho={() => {
                            dispatch(
                                adicionar({
                                    id,
                                    nome,
                                    foto,
                                    preco,
                                    descricao,
                                    porcao,
                                    quantidade,
                                }),
                            );
                        }}
                    />
                }
            </ContainerInfos>
        </ModalStyled>
    );
};

export default Modal;
