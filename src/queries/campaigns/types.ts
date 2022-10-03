import { CreateFormI } from "components/frontend/form/dashboard/create-form/types"

export interface CampaignsI extends CreateFormI {
	id: number
}

export type campaignsT = CampaignsI[] | undefined

export interface CampaignsQueryReturnI {
	campaigns: campaignsT
}

export interface CampaignsBySlugReturnI {
	campaign: CampaignsI | undefined
}

export interface useSetCampaignByIdQueryReturnI {
	getCampaignForEdit: () => campaignsT
	campaign: CampaignsI | undefined
}
