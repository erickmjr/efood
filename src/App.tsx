import EstiloGlobal from './styles/styles';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
    return (
        <>
            <BrowserRouter>
                <EstiloGlobal />
                <Rotas />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
