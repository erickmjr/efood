import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Prato } from '../../../models/Prato';

const initialState: Prato[] = [];

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Prato>) => {
            const ultimoPrato = state[state.length - 1];

            const pratoNovo = {
                ...action.payload,
                id: ultimoPrato ? ultimoPrato.id + 1 : 1,
            };

            const pratoExistente = state.find(
                (item) => item.nome == action.payload.nome,
            );

            if (pratoExistente) {
                pratoExistente.quantidade++;
            } else {
                pratoNovo.quantidade = 1;
                state.push(pratoNovo);
            }
        },
        remover: (
            state,
            action: PayloadAction<
                Omit<Prato, 'descricao' | 'porcao' | 'quantidade'>
            >,
        ) => {
            return (state = state.filter(
                (prato) => prato.id != action.payload.id,
            ));
        },
        limpar: (state) => {
            for (let i = 0; i <= state.length; i++) {
                state.pop();
            }
            return state;
        },
    },
});

export const { adicionar, remover, limpar } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
