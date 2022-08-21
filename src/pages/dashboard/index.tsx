import { getCampaigns } from 'api/methods'
import { CampaignsPageLayout } from 'components/ui/layouts/campaigns-page-layout'
import { NavLayout } from 'components/ui/layouts/nav-layout'
import { OrdersPageLayout } from 'components/ui/layouts/orders-page-layout'
import { Container } from 'components/ui/styles/container'
import { NavContext } from 'context/dashboard/navContext'
import { InitialStateEnum } from 'context/dashboard/types'
import { GetServerSideProps, NextPage } from 'next'
import { CampaignsI } from 'queries/campaigns/types'
import { CampaignsQueryKeys, useCampaignsQuery } from 'queries/campaigns/useCampaignsQuery'
import React, { useContext } from 'react'
import { QueryClient, dehydrate } from 'react-query'

const Dashboard: NextPage = (): JSX.Element => {
	const { setPage, page } = useContext(NavContext)
	const { campaigns } = useCampaignsQuery()

	return (
		<Container theme="dashboard">
			<NavLayout setPage={setPage} />
			{page === InitialStateEnum.campaigns && <CampaignsPageLayout campaigns={campaigns} />}
			{page === InitialStateEnum.orders && <OrdersPageLayout />}
		</Container>
	)
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient: QueryClient = new QueryClient()
	await queryClient.prefetchQuery<CampaignsI[]>(CampaignsQueryKeys.campaigns, getCampaigns)

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
		}
	}
}
