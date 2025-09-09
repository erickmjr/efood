import styled from 'styled-components';
import background from '../../assets/background/header.png';
import cores from '../../styles/cores';
export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-image: url(${background});
    background-size: contain;
    padding: 16px;
    height: 384px;

    img {
        height: 57.5px;
        width: 125px;
        margin-bottom: 3rem;
    }

    p {
        font-size: 36px;
        text-align: center;
        color: ${cores.salmao};
        max-width: 539px;
        font-weight: bold;
    }
`;
