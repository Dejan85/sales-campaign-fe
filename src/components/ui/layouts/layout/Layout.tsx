import { Container } from 'components/ui/styles/container'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { FooterLayout } from '../footer-layout'
import { HeaderLayout } from '../header-layout/HeaderLayout'

interface Props {
	children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }): JSX.Element => {
	const { pathname } = useRouter()

	return (
		<Container theme={pathname === '/kupovina' ? 'primaryBg' : 'primary'}>
			<HeaderLayout />
			{children}
			<FooterLayout />
		</Container>
	)
}
