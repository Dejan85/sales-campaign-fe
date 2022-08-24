import { Table } from 'components/frontend/table'
import { Container } from 'components/ui/styles/container'
import { OrdersI } from 'queries/orders/types'
import React from 'react'
import { NoCampaignsMessage } from '../no-campaigns-message'

interface OrdersPageLayoutI {
	orders: OrdersI[] | undefined
}

export const OrdersPageLayout: React.FC<OrdersPageLayoutI> = ({ orders }): JSX.Element => {
	return (
		<Container theme="flexColumn">
			{orders ? <Table campaigns={orders} limitObjectKey="quantity" /> : <NoCampaignsMessage />}
		</Container>
	)
}
