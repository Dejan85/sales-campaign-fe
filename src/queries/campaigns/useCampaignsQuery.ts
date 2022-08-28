import { getCampaigns, getCampaignsById, getCampaignsBySlug } from 'api/methods'
import { useQuery, useQueryClient, UseQueryResult } from 'react-query'
import { CampaignsBySlugReturnI, CampaignsI, CampaignsQueryReturnI, useSetCampaignByIdQueryReturnI } from './types'

export enum CampaignsQueryKeys {
	campaigns = 'campaigns',
	campaignById = 'campaignById',
	campaignsBySlug = 'campaignsBySlug'
}

// get all campaigns
export const useCampaignsQuery = (): CampaignsQueryReturnI => {
	const { data }: UseQueryResult<CampaignsI[]> = useQuery(CampaignsQueryKeys.campaigns, getCampaigns)
	return { campaigns: data }
}

// get campaign by slug
export const useCampaignsBySlugQuery = (slug: string): CampaignsBySlugReturnI => {
	const { data }: UseQueryResult<CampaignsI | undefined> = useQuery(
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

// get campaign by id
export const useCampaignByIdQuery = (id: string): CampaignsBySlugReturnI => {
	const { data }: UseQueryResult<CampaignsI | undefined> = useQuery(
		[CampaignsQueryKeys.campaignById, id],
		() => {
			return getCampaignsById(id)
		},
		{
			enabled: id ? true : false,
			select: data => {
				return data[0]
			}
		}
	)

	return { campaign: data }
}
