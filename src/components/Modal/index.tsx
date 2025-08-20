import BtnAddCarrinho from '../BtnAddCarrinho';
import { ContainerInfos, ContainerNomeBtn, ModalStyled } from './styles';
import { useDispatch } from 'react-redux';
import { adicionar } from '../../redux/reducers/carrinho';
interface ModalProps {
    image: string;
    titulo: string;
    descricaoModal: string;
    descricao: string;
    valor: number;
    onClose: () => void;
}

const Modal = ({
    image,
    titulo,
    descricaoModal,
    descricao,
    valor,
    onClose,
}: ModalProps) => {
    const dispatch = useDispatch();

    return (
        <ModalStyled>
            <img src={image} alt={titulo} />
            <ContainerInfos>
                <ContainerNomeBtn>
                    <h4>{titulo}</h4>
                    <button type="button" onClick={() => onClose()}>
                        X
                    </button>
                </ContainerNomeBtn>
                <p>{descricaoModal}</p>
                <p>Serve: de 2 a 3 pessoas</p>
                <BtnAddCarrinho
                    valor={valor}
                    addCarrinho={() => {
                        dispatch(
                            adicionar({
                                titulo,
                                imagem: image,
                                valor,
                                descricaoModal,
                                descricao,
                            }),
                        );
                    }}
                />
            </ContainerInfos>
        </ModalStyled>
    );
};

export default Modal;
