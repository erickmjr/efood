import type { EntregaProps } from '../FormEntrega';
import {
    BtnAcao,
    ContainerCVV,
    ContainerInput,
    ContainerVencimento,
    FormContainer,
    FormStyled,
} from '../FormEntrega/styles';

interface FormPagamentoProps {
    valor: number;
}

type PagamentoProps = FormPagamentoProps & EntregaProps;

const FormPagamento = ({
    onClickProximo,
    onClickVoltar,
    valor,
}: PagamentoProps) => {
    return (
        <FormContainer>
            <h3>Pagamento - Valor a pagar: R$ {valor.toFixed(2)}</h3>
            <FormStyled onSubmit={onClickProximo}>
                <ContainerInput>
                    <label htmlFor="pagamento-nome">Nome do cartão</label>
                    <input
                        required
                        type="text"
                        id="pagamento-nome"
                        name="pagamento-nome"
                    />
                </ContainerInput>
                <ContainerCVV>
                    <ContainerInput>
                        <label htmlFor="pagamento-numero">
                            Número do cartão
                        </label>
                        <input
                            required
                            type="number"
                            id="pagamento-numero"
                            name="pagamento-numero"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="pagamento-cvv">CVV</label>
                        <input
                            required
                            type="number"
                            id="pagamento-cvv"
                            name="pagamento-cvv"
                            max={999}
                        />
                    </ContainerInput>
                </ContainerCVV>
                <ContainerVencimento>
                    <ContainerInput>
                        <label htmlFor="pagamento-mes">Mês de vencimento</label>
                        <input
                            required
                            type="number"
                            id="pagamento-mes"
                            name="pagamento-mes"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="pagamento-ano">Ano de vencimento</label>
                        <input
                            required
                            type="number"
                            id="pagamento-ano"
                            name="pagamento-ano"
                        />
                    </ContainerInput>
                </ContainerVencimento>
                <BtnAcao type="submit">Finalizar pagamento</BtnAcao>
            </FormStyled>
            <BtnAcao onClick={onClickVoltar}>
                Voltar para a edição de endereço
            </BtnAcao>
        </FormContainer>
    );
};

export default FormPagamento;
