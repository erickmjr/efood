import styled from 'styled-components';
import cores from '../../styles/cores';

export const FooterStyled = styled.footer`
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    padding: 16px;
    text-align: center;
    font-size: 10px;

    img {
        height: 57.5px;
        margin-bottom: 3rem;
    }
`;

export const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;

    img {
        height: 28px;
    }
`;
