import { getCampaigns, getCampaignsBySlug } from 'api/methods'
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
export const useCampaignByIdQuery = (): useSetCampaignByIdQueryReturnI => {
	const queryClient = useQueryClient()

	const setCampaignById = (id: number) => {
		const campaigns: CampaignsI[] | undefined = queryClient.getQueryData(CampaignsQueryKeys.campaigns)
		queryClient.setQueryData(
			CampaignsQueryKeys.campaignById,
			campaigns?.filter(campaign => campaign.id === id)
		)
		queryClient.invalidateQueries(CampaignsQueryKeys.campaignById, { exact: true })
	}

	const getCampaignForEdit = (): CampaignsI[] | undefined => {
		const campaigns: CampaignsI[] | undefined = queryClient.getQueryData(CampaignsQueryKeys.campaignById)
		return campaigns
	}

	const { data: campaign }: UseQueryResult<CampaignsI | undefined> = useQuery(
		CampaignsQueryKeys.campaignById,
		getCampaignForEdit,
		{
			select: (data): CampaignsI | undefined => {
				if (data) {
					return data[0]
				}
			}
		}
	)

	return {
		setCampaignById,
		getCampaignForEdit,
		campaign
	}
}
