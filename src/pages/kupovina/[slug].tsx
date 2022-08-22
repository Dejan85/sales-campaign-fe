import { OrdersForm } from 'components/frontend/form/orders'
import { Container } from 'components/ui/styles/container'
import { NextPage } from 'next'
import React from 'react'

const Purchase: NextPage = (): JSX.Element => {
	return (
		<Container theme="secondary">
			<OrdersForm />
		</Container>
	)
}

export default Purchase
