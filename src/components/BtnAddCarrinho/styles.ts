import styled from 'styled-components';
import cores from '../../styles/cores';

export const ButtonStyled = styled.button`
    padding: 8px;
    text-align: center;
    width: fit-content;
    background-color: ${cores.salmaoClaro};
    color: ${cores.salmao};
    border: none;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    white-space: nowrap;
`;
