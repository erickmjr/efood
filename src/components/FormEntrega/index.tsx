import type { FormEvent } from 'react';
import type { EnderecoEntrega } from '../../models/Pedido';
import {
    BtnAcao,
    CepNum,
    ContainerInput,
    FormContainer,
    FormStyled,
} from './styles';

export interface EntregaProps {
    onClickProximo: (dados: EnderecoEntrega) => void;
    onClickVoltar: () => void;
}
const FormEntrega = ({ onClickProximo, onClickVoltar }: EntregaProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const dados = new FormData(event.currentTarget);

        onClickProximo({
            receiver: String(dados.get('entrega-nome')),
            address: {
                description: String(dados.get('entrega-endereco')),
                city: String(dados.get('entrega-cidade')),
                zipCode: String(dados.get('entrega-cep')),
                number: Number(dados.get('entrega-numero')),
                complement: String(dados.get('entrega-complemento') ?? ''),
            },
        });
    };

    return (
        <FormContainer>
            <h3>Entrega</h3>
            <FormStyled onSubmit={handleSubmit}>
                <ContainerInput>
                    <label htmlFor="entrega-nome">Quem irá receber</label>
                    <input
                        required
                        type="text"
                        id="entrega-nome"
                        name="entrega-nome"
                    />
                </ContainerInput>
                <ContainerInput>
                    <label htmlFor="entrega-endereco">Endereço</label>
                    <input
                        required
                        type="text"
                        id="entrega-endereco"
                        name="entrega-endereco"
                    />
                </ContainerInput>
                <ContainerInput>
                    <label htmlFor="entrega-cidade">Cidade</label>
                    <input
                        required
                        type="text"
                        id="entrega-cidade"
                        name="entrega-cidade"
                    />
                </ContainerInput>
                <CepNum>
                    <ContainerInput>
                        <label htmlFor="entrega-cep">CEP</label>
                        <input
                            required
                            type="number"
                            id="entrega-cep"
                            name="entrega-cep"
                            max={99999999}
                        />
                    </ContainerInput>
                    <ContainerInput>
                        <label htmlFor="entrega-numero">Número</label>
                        <input
                            required
                            type="number"
                            id="entrega-numero"
                            name="entrega-numero"
                        />
                    </ContainerInput>
                </CepNum>
                <ContainerInput>
                    <label htmlFor="entrega-complemento">
                        Complemento (opcional)
                    </label>
                    <input
                        type="text"
                        id="entrega-complemento"
                        name="entrega-complemento"
                    />
                </ContainerInput>

                <BtnAcao type="submit">Continuar com o pagamento</BtnAcao>
            </FormStyled>
            <BtnAcao onClick={onClickVoltar}>Voltar para o carrinho</BtnAcao>
        </FormContainer>
    );
};

export default FormEntrega;
