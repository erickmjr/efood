import styled from 'styled-components';
import cores from '../../styles/cores';

export const ButtonStyled = styled.button`
    padding: 8px;
    text-align: center;
    width: 100%;
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    border: none;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
