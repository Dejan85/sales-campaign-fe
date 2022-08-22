import { Container } from 'components/ui/styles/container'
import React from 'react'
import { BodyRows } from './BodyRows'
import { HeaderRows } from './HeaderRows'

export interface TableLayoutI {
	columns: string[]
	rows: string[] | number[]
}

export const TableLayout: React.FC<TableLayoutI> = ({ columns, rows }): JSX.Element => {
	return (
		<Container theme="table">
			<HeaderRows columns={columns} />
			<BodyRows rows={rows} />
		</Container>
	)
}
