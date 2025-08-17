import styled from 'styled-components';
import background from '../../assets/background/header.png';
import cores from '../../styles/cores';
export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-size: contain;
    padding: 16px;

    img {
        height: 57.5px;
        margin-bottom: 3rem;
    }

    p {
        font-size: 28px;
        line-height: 100%;
        color: ${cores.salmao};
    }
`;
