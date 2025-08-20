import styled from 'styled-components';
import cores from '../../styles/cores';

export const ModalStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;

    height: 324px;
    transform: translate(-50%, -50%);

    z-index: 1000;

    background-color: ${cores.salmao};
    color: ${cores.salmaoClaro};
    width: 1024px;
    padding: 16px;

    display: flex;
    align-items: center;
    gap: 12px;

    border-radius: 8px;
    img {
        width: 35%;
        height: 100%;
        max-height: 100%;
    }
`;

export const ContainerInfos = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
        font-size: 18px;
    }

    p {
        font-size: 14px;
    }
`;

export const ContainerNomeBtn = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        width: fit-content;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: ${cores.branco};
        font-weight: bold;
        font-size: 18px;
    }
`;
