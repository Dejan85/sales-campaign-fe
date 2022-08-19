import { Container } from 'components/ui/styles/container'
import React, { ReactNode } from 'react'
import { FooterLayout } from '../footer-layout'
import { HeaderLayout } from '../header-layout/HeaderLayout'

interface Props {
	children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }): JSX.Element => {
	return (
		<Container theme="primary">
			<HeaderLayout />
			{children}
			<FooterLayout />
		</Container>
	)
}
