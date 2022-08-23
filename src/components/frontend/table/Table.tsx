import { TableLayout } from 'components/ui/layouts/table-layout'
import { NavContext } from 'context/dashboard/nav/navContext'
import { InitialStateEnum } from 'context/dashboard/nav/types'
import { CampaignsI, campaignsT } from 'queries/campaigns/types'
import { useCampaignByIdQuery } from 'queries/campaigns/useCampaignsQuery'
import React, { useContext } from 'react'

interface TableI {
	campaigns: campaignsT
}

export const Table: React.FC<TableI> = ({ campaigns }): JSX.Element => {
	const { setPage } = useContext(NavContext)

	const { setCampaignById } = useCampaignByIdQuery()
	const columns: string[] = []

	campaigns?.forEach(campaign => {
		Object.keys(campaign).forEach(key => {
			columns.push(key)
		})
	})

	const editHandler = (id: number) => {
		setCampaignById(id)
		setPage(InitialStateEnum.editCampaign)
	}

	return <TableLayout columns={[...new Set(columns)]} campaigns={campaigns} editHandler={editHandler} />
}
