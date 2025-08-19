import Header from '../../components/Header';
import ListagemRestaurantes from '../../components/ListagemRestaurantes';
import sushi from '../../assets/background/sushi.png';
import macarrao from '../../assets/background/macarrao.png';
import type RestauranteClass from '../../models/Restaurante';

const restaurantes: RestauranteClass[] = [
    {
        id: 1,
        titulo: 'Hioki sushi',
        descricao:
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        estrelas: 4.9,
        tipo: 'Japonesa',
        image: sushi,
        ehDestaque: true,
    },
    {
        id: 2,
        titulo: 'La Dolce Vita Trattoria',
        descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        estrelas: 4.6,
        tipo: 'Italiana',
        image: macarrao,
        ehDestaque: false,
    },
    {
        id: 3,
        titulo: 'Hioki sushi',
        descricao:
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        estrelas: 4.9,
        tipo: 'Japonesa',
        image: sushi,
        ehDestaque: true,
    },
    {
        id: 4,
        titulo: 'La Dolce Vita Trattoria',
        descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        estrelas: 4.6,
        tipo: 'Italiana',
        image: macarrao,
        ehDestaque: false,
    },
];

const Home = () => (
    <>
        <Header />
        <ListagemRestaurantes restaurantes={restaurantes} />
    </>
);

export default Home;
