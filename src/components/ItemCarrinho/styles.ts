import styled from 'styled-components';
import cores from '../../styles/cores';

export const ItemCarrinhoStyled = styled.div`
    display: flex;
    gap: 8px;
    background-color: ${cores.salmaoClaro};
    width: 100%;
    height: 100px;
    padding: 0.5rem;

    h5 {
        font-size: 18px;
        font-weight: bold;
    }

    img {
        width: 80px;
        height: 100%;
        object-fit: cover;
    }
`;

export const ContainerItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    p {
        font-size: 14px;
    }
`;

export const ContainerBtn = styled.div`
    width: 100%;
    text-align: right;
`;

export const BtnRemover = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: none;
    width: fit-content;

    img {
        width: 24px;
    }
`;
