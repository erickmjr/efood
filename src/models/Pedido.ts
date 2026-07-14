export type EnderecoEntrega = {
    receiver: string;
    address: {
        description: string;
        city: string;
        zipCode: string;
        number: number;
        complement: string;
    };
};

export type DadosPagamento = {
    card: {
        name: string;
        number: string;
        code: number;
        expires: {
            month: number;
            year: number;
        };
    };
};

export type ProdutoPedido = {
    id: number;
    price: number;
};

export type CheckoutPayload = {
    products: ProdutoPedido[];
    delivery: EnderecoEntrega;
    payment: DadosPagamento;
};

export type PedidoResponse = {
    orderId: string;
};
