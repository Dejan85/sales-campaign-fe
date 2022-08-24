import { Container } from 'components/ui/styles/container'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { FooterLayout } from '../footer-layout'
import { HeaderLayout } from '../header-layout/HeaderLayout'

interface Props {
	children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }): JSX.Element => {
	const { query, route } = useRouter()
	const slug = query.slugs as string[]

	const slugs = ['therapy-air-smart', 'therapy-air-iOn-white', 'therapy-air-iOn-black']
	const showHeaderFooter = route !== '/dashboard' ? true : false

	return (
		<Container theme={slug && slugs.indexOf(slug[1]) !== -1 ? 'primaryBg' : 'primary'}>
			{showHeaderFooter && <HeaderLayout />}
			{children}
			{showHeaderFooter && <FooterLayout />}
		</Container>
	)
}
