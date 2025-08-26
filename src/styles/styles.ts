import { createGlobalStyle } from 'styled-components';
import cores from './cores';

const EstiloGlobal = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Sen', sans-serif;
    }

    body, html {
        background-color: ${cores.branco1};
    }

    button {
        cursor: pointer;
    }

    .flex {
        display: flex;
    }

    .hide {
        display: none;
    }
`;

export default EstiloGlobal;
