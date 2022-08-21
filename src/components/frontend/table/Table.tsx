import { TableLayout } from 'components/ui/layouts/table-layout'
import { CampaignsI } from 'queries/campaigns/types'
import React from 'react'

interface TableI {
	campaigns: CampaignsI[] | undefined
}

export const Table: React.FC<TableI> = ({ campaigns }): JSX.Element => {
	const columns: string[] = []
	const rows: string[] = []

	campaigns?.forEach(campaign => {
		Object.keys(campaign).forEach(key => {
			columns.push(key)
		})

		Object.values(campaign).forEach(value => {
			rows.push(value)
		})
	})

	return <TableLayout columns={[...new Set(columns)]} rows={rows} />
}
