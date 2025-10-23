import { Container, HeroStyled } from './styles';

type HeroProps = {
    tipo: string;
    nome: string;
    capa: string;
};

const Hero = ({ tipo, nome, capa }: HeroProps) => (
    <HeroStyled capa={capa}>
        <h2>{tipo}</h2>
        <h3>{nome}</h3>
    </HeroStyled>
);

export default Hero;
