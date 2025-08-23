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
`;

export const ContainerValor = styled.div`
    display: flex;
    justify-content: space-between;
`;
