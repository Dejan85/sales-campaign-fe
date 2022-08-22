import { UpdateForm } from 'components/frontend/form/dashboard/update-form'
import { Container } from 'components/ui/styles/container'
import { useCampaignByIdQuery } from 'queries/campaigns/useCampaignsQuery'
import React from 'react'

export const EditCampaign: React.FC = (): JSX.Element => {
	const { campaign } = useCampaignByIdQuery()

	return (
		<Container theme="fullWidthBg">
			<UpdateForm campaign={campaign} />
		</Container>
	)
}
