import { getOrders } from 'api/methods'
import { OrdersPageLayout } from 'components/ui/layouts/orders-page-layout'
import { GetServerSideProps, NextPage } from 'next'
import { OrdersI } from 'queries/orders/types'
import { OrdersQueryKeys, useOrdersQuery } from 'queries/orders/useOrdersQuery'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'

const Orders: NextPage = (): JSX.Element => {
	const { orders } = useOrdersQuery()

	return <OrdersPageLayout orders={orders} />
}

export default Orders

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient: QueryClient = new QueryClient()

	await queryClient.prefetchQuery<OrdersI[]>(OrdersQueryKeys.orders, getOrders)

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
		}
	}
}
