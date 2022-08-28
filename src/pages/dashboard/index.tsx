import { getCampaigns, getOrders } from 'api/methods'
import { GetServerSideProps, NextPage } from 'next'
import { CampaignsI } from 'queries/campaigns/types'
import { CampaignsQueryKeys } from 'queries/campaigns/useCampaignsQuery'
import React, { useEffect } from 'react'
import { QueryClient, dehydrate } from 'react-query'
import { OrdersQueryKeys } from 'queries/orders/useOrdersQuery'
import { OrdersI } from 'queries/orders/types'
import { useRouter } from 'next/router'
import { NavEnum } from 'components/ui/layouts/nav-layout/NavLayout'

export type setPageT = (page: NavEnum) => void

const Dashboard: NextPage = (): JSX.Element => {
	const { push } = useRouter()

	useEffect(() => {
		push('/dashboard/campaigns')
	}, [])

	return <></>
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
