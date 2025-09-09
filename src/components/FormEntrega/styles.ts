import styled from 'styled-components';
import cores from '../../styles/cores';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    color: ${cores.salmaoClaro};
    font-weight: bold;

    label,
    input {
        font-size: 14px;
    }

    input {
        width: 100%;
        background-color: ${cores.salmaoClaro};
        color: #000;
    }

    h3 {
        font-size: 16px;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const CepNum = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    input {
        border: none;
        height: 32px;
        padding: 8px;
    }
`;

export const ContainerCVV = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;

    div:nth-child(1) {
        width: 228px;
    }

    div:nth-child(2) {
        width: 87px;
    }
`;

export const ContainerVencimento = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;

    div:nth-child(1),
    div:nth-child(2) {
        width: 155px;
    }
`;

export const BtnAcao = styled.button`
    width: 100%;
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    border: none;
    font-weight: bold;
    padding: 8px;
    font-size: 14px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
