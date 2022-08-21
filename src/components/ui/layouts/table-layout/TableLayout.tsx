import { Container } from 'components/ui/styles/container'
import { CampaignsI } from 'queries/campaigns/types'
import React from 'react'
import { BodyRow } from './BodyRow'
import { HeaderRow } from './HeaderRow'

export interface TableLayoutI {
	columns: string[]
	rows: string[] | number[]
}

export const TableLayout: React.FC<TableLayoutI> = ({ columns, rows }): JSX.Element => {
	return (
		<Container theme="table">
			<HeaderRow columns={columns} />
			<BodyRow rows={rows} />
		</Container>
	)
}
