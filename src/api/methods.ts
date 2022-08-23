import { FetchWrapper } from './axios'
import { API_ROUTES } from './routes'

///////////////////////////////////// GET METHODS ///////////////////////////////////////////

// get campaigns
export const getCampaigns = () =>
	FetchWrapper.get({
		route: API_ROUTES.getCampaigns()
	})

// get campaign by slug
export const getCampaignsBySlug = (slug: string) =>
	FetchWrapper.get({
		route: API_ROUTES.getCampaignsBySlug(slug)
	})

///////////////////////////////////// POST METHODS ///////////////////////////////////////////
