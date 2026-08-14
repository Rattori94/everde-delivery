import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Prato } from "../../types"

type CartState = {
	itens: Prato[]
	aberto: boolean
}

const initialState: CartState = {
	itens: [],
	aberto: false,
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Prato>) => {
			state.itens.push(action.payload)
			state.aberto = true
		},
		remove: (state, action: PayloadAction<number>) => {
			const index = state.itens.findIndex((item) => item.id === action.payload)
			if (index >= 0) {
				state.itens.splice(index, 1)
			}
		},
		open: (state) => {
			state.aberto = true
		},
		close: (state) => {
			state.aberto = false
		},
		clear: (state) => {
			state.itens = []
		},
	},
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
