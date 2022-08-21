import { Table } from 'components/frontend/table'
import { CampaignsI } from 'queries/campaigns/types'
import React from 'react'

interface CampaignsPageLayoutI {
	campaigns: CampaignsI[] | undefined
}

export const CampaignsPageLayout: React.FC<CampaignsPageLayoutI> = ({ campaigns }): JSX.Element => {
	return (
		<>
			<Table campaigns={campaigns} />
		</>
	)
}
