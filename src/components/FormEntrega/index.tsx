import {
    BtnAcao,
    CepNum,
    ContainerInput,
    FormContainer,
    FormStyled,
} from './styles';

export interface EntregaProps {
    onClickProximo: () => void;
    onClickVoltar: () => void;
}
const FormEntrega = ({ onClickProximo, onClickVoltar }: EntregaProps) => {
    return (
        <FormContainer onSubmit={onClickProximo}>
            <h3>Entrega</h3>
            <FormStyled>
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
