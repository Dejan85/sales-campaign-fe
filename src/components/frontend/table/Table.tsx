import { TableLayout } from 'components/ui/layouts/table-layout'
import { NavContext } from 'context/dashboard/nav/navContext'
import { InitialStateEnum } from 'context/dashboard/nav/types'
import { CampaignsI } from 'queries/campaigns/types'
import { useCampaignByIdQuery } from 'queries/campaigns/useCampaignsQuery'
import { OrdersI } from 'queries/orders/types'
import React, { useContext } from 'react'
import { useTableUtils } from 'utils'

interface TableI {
	campaigns: CampaignsI[] | OrdersI[]
	limitObjectKey: string
}

export const Table: React.FC<TableI> = ({ campaigns, limitObjectKey }): JSX.Element => {
	const { setPage } = useContext(NavContext)
	const { setCampaignById } = useCampaignByIdQuery()
	const { tableData, columnNumber } = useTableUtils(limitObjectKey, campaigns)

	const editHandler = (id: number) => {
		setCampaignById(id)
		setPage(InitialStateEnum.editCampaign)
	}

	return <TableLayout editHandler={editHandler} tableData={tableData} columnNumber={columnNumber} />
}
