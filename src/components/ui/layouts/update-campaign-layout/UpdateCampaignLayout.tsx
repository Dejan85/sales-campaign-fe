import { UpdateForm } from 'components/frontend/form/dashboard/update-form'
import { Container } from 'components/ui/styles/container'
import { useRouter } from 'next/router'
import { useCampaignByIdQuery } from 'queries/campaigns/useCampaignsQuery'
import React from 'react'

export const UpdateCampaignLayout: React.FC = (): JSX.Element => {
	const { query } = useRouter()
	const id = query.id as string

	const { campaign } = useCampaignByIdQuery(id)

	return <Container theme="fullWidthBg">{campaign && <UpdateForm campaign={campaign} />}</Container>
}
