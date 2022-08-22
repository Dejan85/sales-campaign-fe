import { Container } from 'components/ui/styles/container'
import { Column, Row } from 'components/ui/styles/table'
import React from 'react'

export interface BodyRowI {
	rows: string[] | number[]
	editHandler: (id: number) => void
}

export const BodyRows: React.FC<BodyRowI> = ({ rows, editHandler }): JSX.Element => {
	return (
		<Container theme="tableBody">
			{rows.map((row, index) => {
				return (
					<Column
						key={index}
						theme="primary"
						onClick={() => {
							const rowsId = rows[0] as number
							editHandler(rowsId)
						}}
					>
						<Row theme="cell">{row}</Row>
					</Column>
				)
			})}
		</Container>
	)
}
