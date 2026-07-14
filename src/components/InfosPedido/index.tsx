import { BtnAcao, FormContainer } from '../FormEntrega/styles';
import { useDispatch } from 'react-redux';
import { limpar } from '../../redux/reducers/carrinho';
import type { PedidoResponse } from '../../models/Pedido';

interface infosPedidoProps {
    onClick: () => void;
    pedido: PedidoResponse | null;
}

const InfosPedido = ({ onClick, pedido }: infosPedidoProps) => {
    const dispatch = useDispatch();

    return (
        <FormContainer>
            <h3>Pedido realizado - {pedido?.orderId}</h3>
            <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
            </p>

            <BtnAcao
                onClick={() => {
                    dispatch(limpar());
                    onClick();
                }}
            >
                Concluir
            </BtnAcao>
        </FormContainer>
    );
};

export default InfosPedido;
