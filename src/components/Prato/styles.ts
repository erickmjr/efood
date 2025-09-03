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

    width: 320px;

    img {
        width: 100%;
        margin-bottom: 8px;
    }

    p {
        margin-bottom: 8px;
        font-size: 14px;
    }
`;
