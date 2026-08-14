import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"
import restaurantes from "../data/restaurantes"
import type { PedidoPayload, PedidoResposta, Restaurante } from "../types"

const atraso = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const api = createApi({
	reducerPath: "api",
	baseQuery: fakeBaseQuery<string>(),
	endpoints: (builder) => ({
		getRestaurantes: builder.query<Restaurante[], void>({
			queryFn: async () => {
				await atraso(400)
				return { data: restaurantes }
			},
		}),
		getRestaurante: builder.query<Restaurante, string>({
			queryFn: async (id) => {
				await atraso(400)
				const encontrado = restaurantes.find((item) => item.id === Number(id))

				if (!encontrado) {
					return { error: "Restaurante não encontrado" }
				}

				return { data: encontrado }
			},
		}),
		purchase: builder.mutation<PedidoResposta, PedidoPayload>({
			queryFn: async (pedido) => {
				await atraso(800)

				if (pedido.products.length === 0) {
					return { error: "Pedido sem itens" }
				}

				const orderId = `EVD-${Date.now().toString(36).toUpperCase()}`
				return { data: { orderId } }
			},
		}),
	}),
})

export const {
	useGetRestaurantesQuery,
	useGetRestauranteQuery,
	usePurchaseMutation,
} = api

export default api
