import styled from 'styled-components';
import cores from '../../styles/cores';

export const PratoStyled = styled.div`
    background-color: ${cores.salmao};
    color: ${cores.salmaoClaro};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 8px;

    img {
        width: 100%;
        margin-bottom: 8px;
    }

    p {
        margin-bottom: 8px;
        font-size: 14px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;
