import { getOrders } from 'api/methods'
import { useQuery, UseQueryResult } from 'react-query'
import { OrdersI, OrdersQueryReturnI } from './types'

export enum OrdersQueryKeys {
	orders = 'orders'
}

// get all campaigns
export const useOrdersQuery = (): OrdersQueryReturnI => {
	const { data }: UseQueryResult<OrdersI[] | undefined> = useQuery(OrdersQueryKeys.orders, getOrders)
	return { orders: data }
}
