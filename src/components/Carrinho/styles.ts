import styled from 'styled-components';
import cores from '../../styles/cores';

export const CarrinhoStyled = styled.aside`
    height: 100%;
    width: 360px;
    background-color: ${cores.salmao};
    color: ${cores.salmaoClaro};
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    padding: 32px 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const ContainerLista = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${cores.salmao};
`;

export const ListaCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
`;

export const ContainerValor = styled.div`
    display: flex;
    justify-content: space-between;

    p {
        font-weight: bold;
        font-size: 14px;
    }
`;

export const BtnEntrega = styled.button`
    border: none;
    cursor: pointer;
    color: ${cores.salmao};
    background-color: ${cores.salmaoClaro};
    width: 100%;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
