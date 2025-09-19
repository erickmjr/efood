import Header from '../../components/Header';
import ListagemRestaurantes from '../../components/ListagemRestaurantes';
import { useEffect, useState } from 'react';
import type { RestauranteAPI } from '../../models/RestauranteInterface';

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([]);

    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setRestaurantes(res));
    }, []);
    return (
        <>
            <Header />
            <ListagemRestaurantes restaurantes={restaurantes} />
        </>
    );
};

export default Home;
