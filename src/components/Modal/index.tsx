import BtnAddCarrinho from '../BtnAddCarrinho';
import { ModalStyled } from './styles';

interface ModalProps {
    image: string;
    titulo: string;
    descricaoModal: string;
    valor: number;
}

const Modal = ({ image, titulo, descricaoModal, valor }: ModalProps) => (
    <ModalStyled>
        <img src={image} alt={titulo} />
        <div>
            <h4>{titulo}</h4>
            <p>{descricaoModal}</p>
            <p>Serve: de 2 a 3 pessoas</p>
            <BtnAddCarrinho valor={valor} />
        </div>
    </ModalStyled>
);

export default Modal;
