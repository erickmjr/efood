import { useState } from 'react';
import BtnDetalhes from '../BtnDetalhes';
import { ContainerInfosPrato, PratoStyled } from './styles';
import Modal from '../Modal';
import { Overlay } from '../Overlay';

interface PratoProps {
    foto: string;
    titulo: string;
    descricao: string;
    valor: number;
    porcao: string;
}

const Prato = ({ titulo, descricao, valor, foto, porcao }: PratoProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <PratoStyled>
                <img src={foto} alt={titulo} />
                <ContainerInfosPrato>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                    <BtnDetalhes
                        onClick={() => setShowModal(!showModal)}
                        texto={'Adicionar ao carrinho'}
                    />
                </ContainerInfosPrato>
            </PratoStyled>

            {showModal && (
                <>
                    <Overlay onClick={() => setShowModal(false)} />
                    <Modal
                        image={foto}
                        titulo={titulo}
                        valor={valor}
                        descricaoModal={descricao}
                        descricao={descricao}
                        porcao={porcao}
                        onClose={() => setShowModal(!showModal)}
                    />
                </>
            )}
        </>
    );
};

export default Prato;
