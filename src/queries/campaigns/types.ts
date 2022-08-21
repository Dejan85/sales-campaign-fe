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

export interface CampaignsQueryReturnI {
	campaigns: CampaignsI[] | undefined
}

export interface CampaignsBySlugReturnI {
	campaign: CampaignsI[] | undefined
}
