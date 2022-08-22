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

export type campaignsT = CampaignsI[] | undefined

export interface CampaignsQueryReturnI {
	campaigns: campaignsT
}

export interface CampaignsBySlugReturnI {
	campaign: campaignsT
}

export interface useSetCampaignByIdQueryReturnI {
	setCampaignById: (id: number) => void
	getCampaignForEdit: () => campaignsT
	campaign: CampaignsI | undefined
}
