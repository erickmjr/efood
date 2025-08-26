import styled from 'styled-components';
import cores from '../../styles/cores';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    color: ${cores.salmaoClaro};

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

export const BtnAcao = styled.button`
    width: 100%;
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    border: none;
    font-weight: bold;
    padding: 8px;
    font-size: 14px;
`;
