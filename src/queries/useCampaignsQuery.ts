import { getCampaign, getCampaignsBySlug } from 'api/methods'
import { useQuery, UseQueryResult } from 'react-query'

export enum CampaignsQueryKeys {
	campaigns = 'campaigns',
	campaignsBySlug = 'campaignsBySlug'
}

export interface CampaignsI {
	id: number
	active: boolean
	dateFrom: string
	dateTo: string
	name: string
	price: number
	promotionsGroup: string
	slug: string
}

export const useCampaignsQuery = () => {
	const { data }: UseQueryResult<CampaignsI[]> = useQuery(CampaignsQueryKeys.campaigns, getCampaign)
	return { campaigns: data }
}

export const useCampaignsBySlugQuery = (slug: string) => {
	const { data }: UseQueryResult<CampaignsI[]> = useQuery(
		CampaignsQueryKeys.campaignsBySlug,
		() => {
			return getCampaignsBySlug(slug)
		},
		{
			select: data => {
				return data[0]
			}
		}
	)
	return { campaign: data }
}
