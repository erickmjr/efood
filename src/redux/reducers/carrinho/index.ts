import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import PratoClass from '../../../models/Prato';

const initialState: PratoClass[] = [];

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Omit<PratoClass, 'id'>>) => {
            const ultimoPrato = state[state.length - 1];

            const pratoNovo = {
                ...action.payload,
                id: ultimoPrato ? ultimoPrato.id + 1 : 1,
            };
            state.push(pratoNovo);
        },
        remover: (state, action: PayloadAction<PratoClass>) => {
            return (state = state.filter(
                (prato) => prato.id != action.payload.id,
            ));
        },
    },
});

export const { adicionar, remover } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
