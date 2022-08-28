import { setPageT } from 'pages/dashboard'
import { CampaignsI } from 'queries/campaigns/types'

export interface UpdateFormI {
	campaign: CampaignsI | undefined
}
