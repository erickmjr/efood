import styled from 'styled-components';
import cores from '../../styles/cores';
type ContainerImgProps = {
    img: string;
};

export const ContainerRestaurante = styled.div`
    color: ${cores.salmao};
    gap: 16px;
    max-width: 472px;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
`;

export const ContainerImg = styled.div<ContainerImgProps>`
    padding: 16px 8px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    height: 217px;
    width: 472px;
    p {
        font-size: 12px;
        background-color: ${cores.salmao};
        padding: 12px 8px;
        color: ${cores.branco1};
        height: fit-content;
    }
`;

export const ContainerInfos = styled.div`
    border: 1px solid ${cores.salmao};
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 181px;
`;

export const InfosGerais = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    p {
        font-size: 14px;
        max-height: 88px;
    }

    img {
        height: 21px;
    }
`;
