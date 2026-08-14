import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import api from "../services/api"
import cartReducer from "./reducers/cart"

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
