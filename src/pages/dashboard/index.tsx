import { getCampaigns, getOrders } from 'api/methods'
import { CampaignsPageLayout } from 'components/ui/layouts/campaigns-page-layout'
import { CreateCampaignLayout } from 'components/ui/layouts/create-campaign-layout'
import { UpdateCampaignLayout } from 'components/ui/layouts/update-campaign-layout'
import { NavLayout } from 'components/ui/layouts/nav-layout'
import { OrdersPageLayout } from 'components/ui/layouts/orders-page-layout'
import { Container } from 'components/ui/styles/container'
import { NavContext } from 'context/dashboard/nav/navContext'
import { InitialStateEnum } from 'context/dashboard/nav/types'
import { GetServerSideProps, NextPage } from 'next'
import { CampaignsI } from 'queries/campaigns/types'
import { CampaignsQueryKeys, useCampaignsQuery } from 'queries/campaigns/useCampaignsQuery'
import React, { useContext } from 'react'
import { QueryClient, dehydrate } from 'react-query'
import { OrdersQueryKeys, useOrdersQuery } from 'queries/orders/useOrdersQuery'
import { OrdersI } from 'queries/orders/types'

export type setPageT = (page: InitialStateEnum) => void

const Dashboard: NextPage = (): JSX.Element => {
	const { setPage, page } = useContext(NavContext)
	const { campaigns } = useCampaignsQuery()
	const { orders } = useOrdersQuery()

	return (
		<Container theme="dashboard">
			<NavLayout setPage={setPage} />
			{page === InitialStateEnum.campaigns && <CampaignsPageLayout campaigns={campaigns} setPage={setPage} />}
			{page === InitialStateEnum.createCampaign && <CreateCampaignLayout setPage={setPage} />}
			{page === InitialStateEnum.editCampaign && <UpdateCampaignLayout setPage={setPage} />}
			{page === InitialStateEnum.orders && <OrdersPageLayout orders={orders} />}
		</Container>
	)
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient: QueryClient = new QueryClient()
	await queryClient.prefetchQuery<CampaignsI[]>(CampaignsQueryKeys.campaigns, getCampaigns)
	await queryClient.prefetchQuery<OrdersI[]>(OrdersQueryKeys.orders, getOrders)

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
		}
	}
}
