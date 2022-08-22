import { Nav } from 'components/ui/styles/nav'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { InitialStateEnum } from 'context/dashboard/nav/types'
import { NextPage } from 'next'
import React from 'react'

interface NavLayoutI {
	setPage: (page: InitialStateEnum) => void
}

export const NavLayout: NextPage<NavLayoutI> = ({ setPage }): JSX.Element => {
	return (
		<Nav theme="primary">
			<Paragraph theme="nav" onClick={() => setPage(InitialStateEnum.campaigns)}>
				Campaigns
			</Paragraph>
			<Paragraph theme="nav" onClick={() => setPage(InitialStateEnum.orders)}>
				Orders
			</Paragraph>
		</Nav>
	)
}
