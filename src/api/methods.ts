import { FetchWrapper } from './axios'
import { API_ROUTES } from './routes'

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
