import { Form } from 'components/frontend/form'
import { Container } from 'components/ui/styles/container'
import { NextPage } from 'next'
import React from 'react'

const Purchase: NextPage = (): JSX.Element => {
	return (
		<Container theme="secondary">
			<Form />
		</Container>
	)
}

export default Purchase
