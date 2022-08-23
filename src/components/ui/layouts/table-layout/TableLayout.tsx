import { Container } from 'components/ui/styles/container'
import { campaignsT } from 'queries/campaigns/types'
import React from 'react'
import { BodyRows } from './BodyRows'
import { HeaderRows } from './HeaderRows'

export interface TableLayoutI {
	columns: string[]
	campaigns: campaignsT
	editHandler: (id: number) => void
}

export const TableLayout: React.FC<TableLayoutI> = ({ columns, campaigns, editHandler }): JSX.Element => {
	return (
		<Container theme="table">
			<HeaderRows columns={columns} />
			{campaigns?.map((campaign, index) => {
				const rows: string[] | number[] = Object.values(campaign)
				return <BodyRows key={index} rows={rows} editHandler={editHandler} />
			})}
		</Container>
	)
}
