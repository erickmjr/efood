import type { FormEvent } from 'react';
import type { DadosPagamento } from '../../models/Pedido';
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
    carregando?: boolean;
    erro?: string | null;
    onClickProximo: (dados: DadosPagamento) => void;
    onClickVoltar: () => void;
}

const FormPagamento = ({
    onClickProximo,
    onClickVoltar,
    valor,
    carregando = false,
    erro = null,
}: FormPagamentoProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const dados = new FormData(event.currentTarget);

        onClickProximo({
            card: {
                name: String(dados.get('pagamento-nome')),
                number: String(dados.get('pagamento-numero')),
                code: Number(dados.get('pagamento-cvv')),
                expires: {
                    month: Number(dados.get('pagamento-mes')),
                    year: Number(dados.get('pagamento-ano')),
                },
            },
        });
    };

    return (
        <FormContainer>
            <h3>Pagamento - Valor a pagar: R$ {valor.toFixed(2)}</h3>
            <FormStyled onSubmit={handleSubmit}>
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
                <BtnAcao type="submit" disabled={carregando}>
                    {carregando ? 'Enviando...' : 'Finalizar pagamento'}
                </BtnAcao>
            </FormStyled>
            {erro && <p>{erro}</p>}
            <BtnAcao onClick={onClickVoltar}>
                Voltar para a edição de endereço
            </BtnAcao>
        </FormContainer>
    );
};

export default FormPagamento;
