import { Container } from 'components/ui/styles/container'
import { ModalContext } from 'context/modal/modalContext'
import { useRouter } from 'next/router'
import React, { ReactNode, useContext } from 'react'
import { FooterLayout } from '../footer-layout'
import { HeaderLayout } from '../header-layout/HeaderLayout'
import { Modal } from '../modal'
import { NavLayout } from '../nav-layout'

interface Props {
	children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }): JSX.Element => {
	const { toggleModal } = useContext(ModalContext)
	const { route } = useRouter()

	const isDashboard = route.search('dashboard')

	return (
		<Container theme={isDashboard === -1 ? 'primary' : 'primaryRow'}>
			{toggleModal && <Modal />}
			{isDashboard === -1 ? <HeaderLayout /> : <NavLayout />}
			{children}
			{isDashboard === -1 && <FooterLayout />}
		</Container>
	)
}
