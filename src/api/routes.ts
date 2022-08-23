export const API_HOST = process.env.API_HOST
const API_URL = `${API_HOST}/api`

export const API_ROUTES = {
	///////////////////////////////////// GET ROUTES ///////////////////////////////////////////

	getCampaigns: () => `${API_URL}/campaigns`,
	getCampaignsBySlug: (slug: string) => `${API_URL}/campaigns/${slug}`,

	///////////////////////////////////// POST ROUTES ///////////////////////////////////////////

	createCampaign: () => `${API_URL}/campaigns`,

	///////////////////////////////////// PUT/PATCH ROUTES ///////////////////////////////////////////
	updateCampaign: (id: number) => `${API_URL}/campaigns/${id}`
}
