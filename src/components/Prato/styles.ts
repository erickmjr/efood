import styled from 'styled-components';
import cores from '../../styles/cores';

export const PratoStyled = styled.div`
    background-color: ${cores.salmao};
    color: ${cores.salmaoClaro};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    padding: 8px;

    width: 320px;

    img {
        object-fit: cover;
        width: 304px;
        margin-bottom: 8px;
        height: 167px;
    }

    p {
        font-size: 14px;
        height: 125px;
    }
`;

export const ContainerInfosPrato = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding: 0;
`;
