import { Provider } from 'react-redux';
import store from './redux/store';
import EstiloGlobal from './styles/styles';
import Rotas from './routes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <EstiloGlobal />
                <Rotas />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
