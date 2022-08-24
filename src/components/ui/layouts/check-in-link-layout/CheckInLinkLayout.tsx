import Link from 'next/link'
import React from 'react'
import { Container } from '../../styles/container'
import { Link as LinkComponent } from '../../styles/link/Link.styles'

interface CheckInLinkLayoutI {
	slug: string
	model: string
}

export const CheckInLinkLayout: React.FC<CheckInLinkLayoutI> = ({ slug, model }): JSX.Element => {
	return (
		<Container theme="linkWrapper">
			<Link href={`/kupovina/${slug}/${model}`}>
				<LinkComponent theme="primary">Prijavite se</LinkComponent>
			</Link>
		</Container>
	)
}
