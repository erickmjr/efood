import styled from 'styled-components';
import macarrao from '../../assets/background/macarrao.png';
import cores from '../../styles/cores';

export const HeroStyled = styled.div`
    position: relative;
    background-image: url(${macarrao});
    background-repeat: no-repeat;
    background-size: cover;
    height: 280px;
    background-position: left center;
    color: ${cores.branco};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 170px;
    font-size: 32px;
    background-color: rgba(0, 0, 0, 0.5);

    h2 {
        font-size: 32px;
        font-weight: 100;
        z-index: 1;
    }

    h3 {
        font-size: 32px;
        font-weight: 900;
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
`;
