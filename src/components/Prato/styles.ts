import styled from 'styled-components';
import cores from '../../styles/cores';
type ContainerImgProps = {
    img: string;
};

export const ContainerPrato = styled.div`
    display: flex;
    flex-direction: column;
    color: ${cores.salmao};
    gap: 12px;
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
    height: 260px;

    p {
        font-size: 12px;
        background-color: ${cores.salmao};
        padding: 12px 8px;
        color: ${cores.branco1};
        height: fit-content;
    }
`;

export const ContainerInfos = styled.div`
    padding: 1dvh;
    display: flex;
    flex-direction: column;
    gap: 1dvh;
`;

export const InfosGerais = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    height: fit-content;
    img {
        height: 21px;
    }
`;
