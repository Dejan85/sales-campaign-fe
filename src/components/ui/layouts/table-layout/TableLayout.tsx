import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Link as LinkComponent } from 'components/ui/styles/link'
import { TableCell } from 'components/ui/styles/table-cell'
import { ModalContext } from 'context/modal/modalContext'
import Link from 'next/link'
import React, { useContext } from 'react'

export interface TableLayoutI {
	tableData: string[]
	columnNumber: number
	deleteHandler?: (id: string) => Promise<void>
}

export const TableLayout: React.FC<TableLayoutI> = ({ tableData, columnNumber, deleteHandler }): JSX.Element => {
	const { toggleModalAction } = useContext(ModalContext)

	return (
		<>
			<Container theme="table" columnNumber={columnNumber}>
				{tableData.map((data, index) => {
					return (
						<TableCell columnNumber={columnNumber} key={index}>
							{index % columnNumber !== 0 && `${data}`}
							{index % columnNumber === 0 &&
								(deleteHandler ? (
									<Button
										type="button"
										theme="tableBtn"
										onClick={() => {
											window.scrollTo(0, 0)
											toggleModalAction({ deleteHandler, id: data, message: 'some message' })
										}}
									>
										Delete
									</Button>
								) : (
									<Link href={`/dashboard/campaigns/update/${data}`}>
										<LinkComponent theme="secondary">Edit</LinkComponent>
									</Link>
								))}
						</TableCell>
					)
				})}
			</Container>
		</>
	)
}
