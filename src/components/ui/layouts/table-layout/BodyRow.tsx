import { Container } from 'components/ui/styles/container'
import { Column, Row } from 'components/ui/styles/table'
import React from 'react'

export interface BodyRowI {
	rows: string[] | number[]
}

export const BodyRow: React.FC<BodyRowI> = ({ rows }): JSX.Element => {
	return (
		<Container theme="tableRow">
			{rows.map((item, index) => {
				return (
					<Column key={index} theme="primary">
						<Row theme="cell">{rows[index]}</Row>
					</Column>
				)
			})}
		</Container>
	)
}
