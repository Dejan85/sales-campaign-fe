import { Container } from 'components/ui/styles/container'
import { TableCell } from 'components/ui/styles/table-cell'
import React from 'react'

export interface TableLayoutI {
	tableData: string[]
	columnNumber: number
	editHandler: (id: number) => void
}

export const TableLayout: React.FC<TableLayoutI> = ({ tableData, columnNumber, editHandler }): JSX.Element => {
	return (
		<Container theme="table" columnNumber={columnNumber}>
			{tableData.map((data, index) => {
				return (
					<TableCell columnNumber={columnNumber} key={index}>
						{`${data}`}
					</TableCell>
				)
			})}
		</Container>
	)
}
