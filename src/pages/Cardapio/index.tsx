import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderCardapio from '../../components/HeaderCardapio';
import Hero from '../../components/Hero';
import ListagemPratos from '../../components/ListagemPratos';
import type { RestauranteAPI } from '../../models/RestauranteInterface';

const Cardapio = () => {
    const { id } = useParams();
    const [restaurante, setRestaurante] = useState<RestauranteAPI>();

    useEffect(() => {
        fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setRestaurante(res));
    }, [id]);

    if (!restaurante) {
        return <h3>Carregando...</h3>;
    }

    return (
        <>
            <HeaderCardapio />
            <Hero
                tipo={restaurante.tipo}
                nome={restaurante.titulo}
                capa={restaurante.capa}
            />

            <ListagemPratos cardapio={restaurante.cardapio} />
        </>
    );
};

export default Cardapio;
