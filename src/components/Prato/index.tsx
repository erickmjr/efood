import { useState } from 'react';
import BtnDetalhes from '../BtnDetalhes';
import { Overlay, PratoStyled } from './styles';
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
                <img src={imagem} alt={titulo} />
                <div>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                    <BtnDetalhes onClick={() => setShowModal(!showModal)} />
                </div>
            </PratoStyled>

            {showModal && (
                <>
                    <Overlay onClick={() => setShowModal(false)} />
                    <Modal
                        image={imagem}
                        titulo={titulo}
                        valor={valor}
                        descricaoModal={descricaoModal}
                        descricao={descricao}
                        onClose={() => setShowModal(!showModal)}
                    />
                </>
            )}
        </>
    );
};

export default Prato;
