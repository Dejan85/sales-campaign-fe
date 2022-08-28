import { getCampaigns } from 'api/methods'
import { CampaignsPageLayout } from 'components/ui/layouts/campaigns-page-layout'
import { GetServerSideProps, NextPage } from 'next'
import { CampaignsI } from 'queries/campaigns/types'
import { CampaignsQueryKeys, useCampaignsQuery } from 'queries/campaigns/useCampaignsQuery'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'

const Campaigns: NextPage = (): JSX.Element => {
	const { campaigns } = useCampaignsQuery()

	return <CampaignsPageLayout campaigns={campaigns} />
}

export default Campaigns

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient: QueryClient = new QueryClient()
	await queryClient.prefetchQuery<CampaignsI[]>(CampaignsQueryKeys.campaigns, getCampaigns)

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
		}
	}
}
