import styled from 'styled-components';
import background from '../../assets/background/header.png';
import cores from '../../styles/cores';

export const HeaderCardapioStyled = styled.header`
    width: 100%;

    background-image: url(${background});
    background-size: contain;

    display: flex;
    justify-content: space-around;
    align-items: center;
    color: ${cores.salmao};

    height: 178px;

    img {
        height: 57.5px;
        width: 125px;
    }

    a {
        color: ${cores.salmao};
        font-size: 18px;
        text-decoration: none;
    }
`;
