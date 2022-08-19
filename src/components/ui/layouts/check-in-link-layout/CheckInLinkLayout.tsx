import Link from 'next/link'
import React from 'react'
import { Container } from '../../styles/container'
import { Link as LinkComponent } from '../../styles/link/Link.styles'

export const CheckInLinkLayout: React.FC = (): JSX.Element => {
	return (
		<Container theme="linkWrapper">
			<Link href="/kupovina">
				<LinkComponent theme="primary">Prijavite se</LinkComponent>
			</Link>
		</Container>
	)
}
