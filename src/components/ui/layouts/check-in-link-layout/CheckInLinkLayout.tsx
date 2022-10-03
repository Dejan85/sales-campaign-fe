import { ContainerColumn } from 'components/ui/refactore/container'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { Link as LinkComponent } from '../../styles/link/Link.styles'
import { InfoBtn } from '../../refactore/info-btn'
import { ModalContext } from 'context/modal/modalContext'
import { NewsLetterModal } from '../newslater-modal'

interface CheckInLinkLayoutI {
	slug: string
	model: string
}

export const CheckInLinkLayout: React.FC<CheckInLinkLayoutI> = ({ slug, model }): JSX.Element => {
	const { toggleNewsLetterModalAction, toggleNewsLetterModal } = useContext(ModalContext)

	return (
		<>
			{/* {toggleNewsLetterModal && <NewsLetterModal />} */}
			<ContainerColumn width="230" margin="default">
				<ContainerColumn padding="reset">
					<InfoBtn text="Ubaci neki tekst" />
					<Link href={`/kupovina/${slug}/${model}`}>
						<LinkComponent theme="third">Rezervisi uredjaj</LinkComponent>
					</Link>
				</ContainerColumn>

				<ContainerColumn padding="reset">
					<InfoBtn text="Ubaci neki teks Ubaci neki teks? Ubaci neki teks Ubaci neki teks? Ubaci neki teks Ubaci neki teks?" />
					{/* <Link href={`/kupovina/${slug}/${model}`}> */}
					<LinkComponent onClick={toggleNewsLetterModalAction} theme="third">
						Prati kampanju
					</LinkComponent>
					{/* </Link> */}
				</ContainerColumn>
			</ContainerColumn>
		</>
	)
}
