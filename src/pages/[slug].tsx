import { getCampaign, getCampaignsBySlug } from 'api/methods'
import { CountdownTimer } from 'components/frontend/countdown-timer'
import { CheckInLinkLayout } from 'components/ui/layouts/check-in-link-layout'
import { ImageLayout } from 'components/ui/layouts/image-layout'
import { MainHeadingLayout } from 'components/ui/layouts/main-heading-layout'
import { Section } from 'components/ui/styles/section'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { CampaignsI, CampaignsQueryKeys, useCampaignsBySlugQuery } from 'queries/useCampaignsQuery'
import React, { useState } from 'react'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'
import { SpecialOfferLayout } from 'components/ui/layouts/special-offer-layout'
import { PriceLayout } from 'components/ui/layouts/price-layout/PriceLayout'
import { Container } from 'components/ui/styles/container'

const Campaign: NextPage = (): JSX.Element => {
	const { query } = useRouter()
	const slug = query.slug as string
	const [countdownExpire, setCountdownExpire] = useState<boolean>(false)
	const { campaign } = useCampaignsBySlugQuery(slug)

	return (
		<Container theme="secondary">
			<Section theme="primary">
				<MainHeadingLayout />
				<PriceLayout />
				<SpecialOfferLayout />
				<CountdownTimer countdownTimestampMs={1660960800000} setCountdownExpire={setCountdownExpire} />
				<CheckInLinkLayout />
			</Section>

			<Section theme="imageSection">
				<ImageLayout />
			</Section>
		</Container>
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
