import styled from 'styled-components';
import cores from '../../styles/cores';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    display: block;
    background-color: ${cores.salmao};
    color: ${cores.salmaoClaro};
    width: fit-content;
    padding: 8px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
`;
