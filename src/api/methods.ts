import { FetchWrapper } from './axios'
import { API_ROUTES } from './routes'

// get campaigns
export const getCampaign = () =>
	FetchWrapper.get({
		route: API_ROUTES.getCampaign()
	})

// get campaign by slug
export const getCampaignsBySlug = (slug: string) =>
	FetchWrapper.get({
		route: API_ROUTES.getCampaignsBySlug(slug)
	})
