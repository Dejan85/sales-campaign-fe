import { CreateForm } from 'components/frontend/form/dashboard/create-form'
import { Container } from 'components/ui/styles/container'
import React from 'react'

export const CreateCampaignLayout: React.FC = (): JSX.Element => {
	return (
		<Container theme="fullWidthBg">
			<CreateForm />
		</Container>
	)
}
