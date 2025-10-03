import { useState } from 'react';
import BtnDetalhes from '../BtnDetalhes';
import { ContainerInfosPrato, PratoStyled } from './styles';
import Modal from '../Modal';
import { Overlay } from '../Overlay';

interface PratoProps {
    id: number;
    foto: string;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
    quantidade: number;
}

const Prato = ({
    id,
    nome,
    descricao,
    preco,
    foto,
    porcao,
    quantidade,
}: PratoProps) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <PratoStyled>
                <img src={foto} alt={nome} />
                <ContainerInfosPrato>
                    <h4>{nome}</h4>
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
                        id={id}
                        foto={foto}
                        nome={nome}
                        preco={preco}
                        descricao={descricao}
                        porcao={porcao}
                        quantidade={quantidade}
                        onClose={() => setShowModal(!showModal)}
                    />
                </>
            )}
        </>
    );
};

export default Prato;
