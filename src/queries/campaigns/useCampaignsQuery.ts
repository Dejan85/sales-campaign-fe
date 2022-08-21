import { getCampaigns, getCampaignsBySlug } from 'api/methods'
import { useQuery, UseQueryResult } from 'react-query'
import { CampaignsBySlugReturnI, CampaignsI, CampaignsQueryReturnI } from './types'

export enum CampaignsQueryKeys {
	campaigns = 'campaigns',
	campaignsBySlug = 'campaignsBySlug'
}

export const useCampaignsQuery = (): CampaignsQueryReturnI => {
	const { data }: UseQueryResult<CampaignsI[]> = useQuery(CampaignsQueryKeys.campaigns, getCampaigns)
	return { campaigns: data }
}

export const useCampaignsBySlugQuery = (slug: string): CampaignsBySlugReturnI => {
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
