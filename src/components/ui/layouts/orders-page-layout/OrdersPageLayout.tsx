import { deleteOrder } from 'api/methods'
import { Table } from 'components/frontend/table'
import { Container } from 'components/ui/styles/container'
import { OrdersI } from 'queries/orders/types'
import { OrdersQueryKeys } from 'queries/orders/useOrdersQuery'
import React from 'react'
import { useQueryClient } from 'react-query'
import { NoDataMessage } from '../no-data-message'

interface OrdersPageLayoutI {
	orders: OrdersI[] | undefined
}

export const OrdersPageLayout: React.FC<OrdersPageLayoutI> = ({ orders }): JSX.Element => {
	const columns = ['Id', 'Name', 'Email', 'Address', 'Quantity', 'Terms', 'Wish Discount', 'Message', 'Phone', 'Model']
	const queryClient = useQueryClient()

	const deleteHandler = async (id: string) => {
		try {
			await deleteOrder(id)
			queryClient.refetchQueries(OrdersQueryKeys.orders)
		} catch (error) {
			console.log('test error for delete order', error)
		}
	}

	return (
		<Container theme="flexColumn">
			{orders ? (
				<Table columns={columns} campaigns={orders} deleteHandler={deleteHandler} />
			) : (
				<NoDataMessage message="There are no orders!" />
			)}
		</Container>
	)
}
