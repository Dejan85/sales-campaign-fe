import { Table } from 'components/frontend/table'
import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { InitialStateEnum } from 'context/dashboard/nav/types'
import { CampaignsI } from 'queries/campaigns/types'
import React from 'react'

interface CampaignsPageLayoutI {
	campaigns: CampaignsI[] | undefined
	setPage: (page: InitialStateEnum) => void
}

export const CampaignsPageLayout: React.FC<CampaignsPageLayoutI> = ({ campaigns, setPage }): JSX.Element => {
	return (
		<Container theme="flexColumn">
			<Container theme="linkWrapperSecondary">
				<Button theme="secondary" onClick={() => setPage(InitialStateEnum.createCampaign)}>
					Create new campaign
				</Button>
			</Container>
			<Table campaigns={campaigns} />
		</Container>
	)
}
