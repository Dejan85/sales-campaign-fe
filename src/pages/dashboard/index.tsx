import { CampaignsPageLayout } from 'components/ui/layouts/campaigns-page-layout'
import { NavLayout } from 'components/ui/layouts/nav-layout'
import { OrdersPageLayout } from 'components/ui/layouts/orders-page-layout'
import { Container } from 'components/ui/styles/container'
import { NavContext } from 'context/dashboard/navContext'
import { InitialStateEnum } from 'context/dashboard/types'
import { NextPage } from 'next'
import React, { useContext } from 'react'

const Dashboard: NextPage = (): JSX.Element => {
	const { setPage, page } = useContext(NavContext)

	return (
		<Container theme="dashboard">
			<NavLayout setPage={setPage} />
			{page === InitialStateEnum.campaigns && <CampaignsPageLayout />}
			{page === InitialStateEnum.orders && <OrdersPageLayout />}
		</Container>
	)
}

export default Dashboard
