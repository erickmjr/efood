import efood from '../../assets/logos/efood.png';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';
import facebook from '../../assets/icons/facebook.png';
import { ContainerLogoRedes, FooterStyled, RedesSociais } from './styles';

const Footer = () => (
    <FooterStyled>
        <ContainerLogoRedes>
            <img src={efood} alt="eFood" />
            <RedesSociais>
                <a href="#">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="#">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={twitter} alt="Twitter" />
                </a>
            </RedesSociais>
        </ContainerLogoRedes>

        <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
        </p>
    </FooterStyled>
);

export default Footer;
