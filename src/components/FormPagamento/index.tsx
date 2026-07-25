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
    const anoAtual = new Date().getFullYear();

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
                        minLength={3}
                        title="Informe o nome impresso no cartão"
                    />
                </ContainerInput>
                <ContainerCVV>
                    <ContainerInput>
                        <label htmlFor="pagamento-numero">
                            Número do cartão
                        </label>
                        <input
                            required
                            type="text"
                            inputMode="numeric"
                            id="pagamento-numero"
                            name="pagamento-numero"
                            pattern="\d{16}"
                            minLength={16}
                            maxLength={16}
                            title="Informe os 16 dígitos do cartão, sem espaços"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="pagamento-cvv">CVV</label>
                        <input
                            required
                            type="text"
                            inputMode="numeric"
                            id="pagamento-cvv"
                            name="pagamento-cvv"
                            pattern="\d{3}"
                            minLength={3}
                            maxLength={3}
                            title="Informe os 3 dígitos de segurança do cartão"
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
                            min={1}
                            max={12}
                            title="Informe um mês entre 1 e 12"
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="pagamento-ano">Ano de vencimento</label>
                        <input
                            required
                            type="number"
                            id="pagamento-ano"
                            name="pagamento-ano"
                            min={anoAtual}
                            max={anoAtual + 20}
                            title={`Informe um ano entre ${anoAtual} e ${anoAtual + 20}`}
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
