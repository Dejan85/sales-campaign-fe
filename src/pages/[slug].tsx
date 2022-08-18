import { getCampaign, getCampaignsBySlug } from 'api/methods'
import { Article } from 'components/ui/article'
import { Section } from 'components/ui/section'
import { Heading } from 'components/ui/typography/heading'
import { Paragraph } from 'components/ui/typography/paragraph/Paragraph.styles'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { CampaignsI, CampaignsQueryKeys, useCampaignsBySlugQuery } from 'queries/useCampaignsQuery'
import React from 'react'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'

const Campaign: NextPage = (): JSX.Element => {
	const { query } = useRouter()
	const slug = query.slug as string

	const { campaign } = useCampaignsBySlugQuery(slug)

	// console.log('test campaign', campaign)

	return (
		<Section theme="primary">
			<Article theme="primary">
				<Heading as="h1" theme="primary">
					Narucite Therapy Air Smart uredaj
				</Heading>
				<Paragraph theme="primary">nesakdjask kasjkasjaks as kasd jkdjaskjdka</Paragraph>
			</Article>
			<Article theme="primary"></Article>
		</Section>
	)
}

export default Campaign

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
	let notFound = false
	const slug = params?.slug as string
	const queryClient: QueryClient = new QueryClient()
	await queryClient.prefetchQuery<CampaignsI[]>(CampaignsQueryKeys.campaignsBySlug, () =>
		getCampaignsBySlug(slug).then(res => {
			if (res?.response?.data?.statusCode === 404) {
				notFound = true
			}
			return res
		})
	)
	const campaigns: CampaignsI[] | undefined = await queryClient.getQueryData(CampaignsQueryKeys.campaignsBySlug)
	const activeCampaign = !!campaigns?.length ? campaigns?.filter(({ active }) => active) : []

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
