export interface CampaignsI {
	id: number
	name: string
	expireDate: number | null
	activity: boolean
	slug: string
	therapyAirSmartDiscountPrice: string
	therapyAiriOnWhiteDiscountPrice: string
	therapyAiriOnBlackDiscountPrice: string
	therapyAirSmartPrice: string
	therapyAiriOnWhite: string
	therapyAiriOnBlack: string
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
