import { TableLayout } from 'components/ui/layouts/table-layout'
import { CampaignsI } from 'queries/campaigns/types'
import { FollowerI } from 'queries/followers/types'
import { OrdersI } from 'queries/orders/types'
import React from 'react'
import { useTableUtils } from 'utils'

interface TableI {
	columns: string[]
	campaigns: CampaignsI[] | OrdersI[] | FollowerI[]
	deleteHandler?: (id: string) => Promise<void>
}

export const Table: React.FC<TableI> = ({ columns, campaigns, deleteHandler }): JSX.Element => {
	const { tableData, columnNumber } = useTableUtils(columns, campaigns)

	return <TableLayout deleteHandler={deleteHandler} tableData={tableData} columnNumber={columnNumber} />
}
