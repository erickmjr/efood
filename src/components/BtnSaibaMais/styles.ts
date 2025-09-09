import styled from 'styled-components';
import cores from '../../styles/cores';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    background-color: ${cores.salmao};
    color: ${cores.salmaoClaro};
    width: fit-content;
    padding: 8px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    width: 82px;
    max-height: 24px;
    height: 100%;
    white-space: nowrap;
`;
