import { FormLayout } from 'components/ui/layouts/form-layout'
import { Container } from 'components/ui/styles/container'
import { NextPage } from 'next'
import React from 'react'

const Purchase: NextPage = (): JSX.Element => {
	return (
		<Container theme="secondary">
			<FormLayout />
		</Container>
	)
}

export default Purchase
