import styled from 'styled-components';
import cores from '../../styles/cores';

export const FooterStyled = styled.footer`
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    padding: 16px;
    text-align: center;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 298px;

    p {
        margin: 0 auto;
        max-width: 480px;
    }
`;

export const ContainerLogoRedes = styled.div`
    & > img {
        height: 57.5px;
        width: 125px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 32.5px;
`;

export const RedesSociais = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;

    img {
        height: 24px;
    }
`;
