import { CampaignsI } from 'queries/campaigns/types'

export interface IFormInput {
	name: string
	phone: string
	email: string
	address: string
	// model: string
	quantity: string
	message: string
	terms: string
	wishDiscount: string
}

export interface UpdateFormI {
	campaign: CampaignsI | undefined
}
