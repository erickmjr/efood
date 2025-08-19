import { useState } from 'react';
import pizza from '../../assets/background/pizza.png';
import BtnDetalhes from '../BtnDetalhes';
import { PratoStyled } from './styles';
import Modal from '../Modal';

interface PratoProps {
    imagem: string;
    titulo: string;
    descricao: string;
    valor: number;
    descricaoModal: string;
}

const Prato = ({
    imagem,
    titulo,
    descricao,
    valor,
    descricaoModal,
}: PratoProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <PratoStyled>
                <img src={pizza} alt={titulo} />
                <div>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                    <BtnDetalhes onClick={() => setShowModal(!showModal)} />
                </div>
            </PratoStyled>
            <Modal
                image={imagem}
                titulo={titulo}
                valor={valor}
                descricaoModal={descricaoModal}
            />
        </>
    );
};

export default Prato;
