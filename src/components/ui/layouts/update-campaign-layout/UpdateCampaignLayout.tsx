import { UpdateForm } from 'components/frontend/form/dashboard/update-form'
import { Container } from 'components/ui/styles/container'
import { setPageT } from 'pages/dashboard'
import { useCampaignByIdQuery } from 'queries/campaigns/useCampaignsQuery'
import React from 'react'

interface UpdateCampaignLayoutI {
	setPage: setPageT
}

export const UpdateCampaignLayout: React.FC<UpdateCampaignLayoutI> = ({ setPage }): JSX.Element => {
	const { campaign } = useCampaignByIdQuery()

	return (
		<Container theme="fullWidthBg">
			<UpdateForm campaign={campaign} setPage={setPage} />
		</Container>
	)
}
