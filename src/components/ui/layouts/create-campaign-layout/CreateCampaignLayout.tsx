import { CreateForm } from 'components/frontend/form/dashboard/create-form'
import { Container } from 'components/ui/styles/container'
import { setPageT } from 'pages/dashboard'
import React from 'react'

interface CreateCampaignLayoutI {
	setPage: setPageT
}

export const CreateCampaignLayout: React.FC<CreateCampaignLayoutI> = ({ setPage }): JSX.Element => {
	return (
		<Container theme="fullWidthBg">
			<CreateForm setPage={setPage} />
		</Container>
	)
}
