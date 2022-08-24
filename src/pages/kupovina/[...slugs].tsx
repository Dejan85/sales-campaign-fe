import { getCampaignsBySlug } from 'api/methods'
import { OrdersForm } from 'components/frontend/form/orders'
import { Container } from 'components/ui/styles/container'
import { GetServerSideProps, NextPage } from 'next'
import { CampaignsI } from 'queries/campaigns/types'
import { CampaignsQueryKeys } from 'queries/campaigns/useCampaignsQuery'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'

const Purchase: NextPage = (): JSX.Element => {
	return (
		<Container theme="secondary">
			<OrdersForm />
		</Container>
	)
}

export default Purchase

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const slug = params as { slugs: string[] }

	let notFound = false
	const queryClient: QueryClient = new QueryClient()
	await queryClient.prefetchQuery<CampaignsI[]>(CampaignsQueryKeys.campaignsBySlug, () =>
		getCampaignsBySlug(slug.slugs[0]).then(res => {
			if (res?.response?.data?.statusCode === 404) {
				notFound = true
			}
			return res
		})
	)
	const campaigns: CampaignsI[] | undefined = await queryClient.getQueryData(CampaignsQueryKeys.campaignsBySlug)

	const activeCampaign = campaigns?.filter(({ activity }) => activity)

	if (!!!activeCampaign?.length) {
		return {
			redirect: {
				destination: `/`,
				permanent: false
			}
		}
	}

	if (notFound) {
		return {
			redirect: {
				destination: `/`,
				permanent: false
			}
		}
	}

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
		}
	}
}
