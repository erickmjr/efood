import EstiloGlobal from './styles/styles';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <>
            <BrowserRouter>
                <EstiloGlobal />
                <Rotas />
            </BrowserRouter>
        </>
    );
}

export default App;
