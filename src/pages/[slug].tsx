import { getCampaignsBySlug } from 'api/methods'
import { CheckInLinkLayout } from 'components/ui/layouts/check-in-link-layout'
import { MainHeadingLayout } from 'components/ui/layouts/main-heading-layout'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { CampaignsQueryKeys, useCampaignsBySlugQuery } from 'queries/campaigns/useCampaignsQuery'
import { dehydrate, QueryClient } from 'react-query'
import { SpecialOfferLayout } from 'components/ui/layouts/special-offer-layout'
import { PriceLayout } from 'components/ui/layouts/price-layout/PriceLayout'
import { CampaignsI } from 'queries/campaigns/types'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { ContainerRow } from 'components/ui/refactore/container'
import { Section } from 'components/ui/refactore/section/Section'
import { ImageSection } from 'components/ui/refactore/image-section/ImageSection'

const Campaign: NextPage = (): JSX.Element => {
	const { query } = useRouter()
	const slug = query.slug as string
	const { campaign } = useCampaignsBySlugQuery(slug)
	const countdownTimestampMs = campaign?.expireDate || 0

	return (
		<>
			<SpecialOfferLayout
				totalNumberOfReservations={campaign?.totalNumberOfReservations}
				currentDiscountLevel={campaign?.currentDiscountLevel}
				validReservationsRequired={campaign?.validReservationsRequired}
				nextLevelOfDiscount={campaign?.nextLevelOfDiscount}
				countdownTimestampMs={countdownTimestampMs}
			/>

			<ContainerRow justifyContent="space-between">
				<Section paddingTop="70">
					<MainHeadingLayout headingText="Therapy Air Smart" />
					<PriceLayout
						price={campaign?.airSmartPrice}
						discountPrice={campaign?.airSmartDiscountPrice}
						discount={campaign?.airSmartDiscountPercent}
					/>
					<Paragraph style={{ fontWeight: 'bold', marginTop: '30px' }} theme="primary">
						Trenutno rezervisanih uredjaja: {`${campaign?.airSmartDevicesInStock}`}
					</Paragraph>
					<CheckInLinkLayout slug={slug} model="therapy-air-smart" />
				</Section>

				<ImageSection image="therapy-air-smart.jpg" />
			</ContainerRow>

			<ContainerRow>
				<Section paddingTop="70">
					<MainHeadingLayout headingText="Therapy Air iOn White" />
					<PriceLayout
						price={campaign?.airiOnWhitePrice}
						discountPrice={campaign?.airiOnWhiteDiscountPrice}
						discount={campaign?.airiOnWhiteDiscountPercent}
					/>
					<Paragraph style={{ fontWeight: 'bold', marginTop: '30px' }} theme="primary">
						Trenutno rezervisanih uredjaja: {`${campaign?.airiOnWhiteDevicesInStock}`}
					</Paragraph>
					<CheckInLinkLayout slug={slug} model="therapy-air-iOn-white" />
				</Section>

				<ImageSection image="therapy-air-ion-uredjaji.webp" />
			</ContainerRow>

			<ContainerRow justifyContent="space-between">
				<Section paddingTop="70">
					<MainHeadingLayout headingText="Therapy Air iOn Black" />
					<PriceLayout
						price={campaign?.airiOnBlackPrice}
						discountPrice={campaign?.airiOnBlackDiscountPrice}
						discount={campaign?.airiOnBlackDiscountPercent}
					/>
					<Paragraph style={{ fontWeight: 'bold', marginTop: '30px' }} theme="primary">
						Trenutno rezervisanih uredjaja: {`${campaign?.airiOnBlackDevicesInStock}`}
					</Paragraph>
					<CheckInLinkLayout slug={slug} model="therapy-air-iOn-black" />
				</Section>

				<ImageSection image="therapy-air-ion-uredjaji.webp" />
			</ContainerRow>
		</>
	)
}

export default Campaign

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
	let notFound = false
	const slug = query?.slug as string

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
