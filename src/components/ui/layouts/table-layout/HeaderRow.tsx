import { Container } from 'components/ui/styles/container'
import { Column, Row } from 'components/ui/styles/table'
import React from 'react'

export interface TableLayoutI {
	columns: string[]
}

export const HeaderRow: React.FC<TableLayoutI> = ({ columns }): JSX.Element => {
	return (
		<Container theme="tableRow">
			{columns.map((item, index) => {
				return (
					<Column key={index} theme="primary">
						<Row theme="column">{item}</Row>
					</Column>
				)
			})}
		</Container>
	)
}
