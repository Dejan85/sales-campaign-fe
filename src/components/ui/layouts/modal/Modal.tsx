import { Button } from 'components/ui/styles/button'
import { Container } from 'components/ui/styles/container'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import { ModalContext } from 'context/modal/modalContext'
import { useContext, useRef } from 'react'
import { useOutsideClick } from 'utils'

export const Modal: React.FC = (): JSX.Element => {
	const { toggleModalAction, deleteHandler, id } = useContext(ModalContext)
	const ModalRef = useRef(null!)
	useOutsideClick(ModalRef, toggleModalAction)

	return (
		<Container theme="modal">
			<Container theme="modalContent" ref={ModalRef}>
				<Paragraph theme="primaryMediumFS">Are you sure you want to delete it? You can't undo this action!</Paragraph>
				<Container theme="flexRow" style={{ gap: '20px', marginTop: '50px' }} ref={ModalRef}>
					<Button theme="primary" onClick={toggleModalAction}>
						Cancel
					</Button>
					<Button
						theme="deleteBtn"
						onClick={() => {
							deleteHandler(id)
							toggleModalAction()
						}}
					>
						Delete
					</Button>
				</Container>
			</Container>
		</Container>
	)
}
