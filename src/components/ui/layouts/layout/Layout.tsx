import { Container } from 'components/ui/styles/container'
import { ModalContext } from 'context/modal/modalContext'
import { useRouter } from 'next/router'
import React, { ReactNode, useContext } from 'react'
import { FooterLayout } from '../footer-layout'
import { HeaderLayout } from '../header-layout/HeaderLayout'
import { Modal } from '../modal'
import { NavLayout } from '../nav-layout'
import { NewsLetterModal } from '../newslater-modal'

interface Props {
	children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }): JSX.Element => {
	const { toggleModal, toggleNewsLetterModal } = useContext(ModalContext)
	const { route } = useRouter()

	const isDashboard = route.search('dashboard')
	const isKupovina = route.search('kupovina')

	return (
		<Container theme={isKupovina !== -1 ? 'primaryBg' : isDashboard === -1 ? 'primary' : 'primaryRow'}>
			{toggleModal && <Modal />}
			{toggleNewsLetterModal && <NewsLetterModal />}
			{isDashboard === -1 ? <HeaderLayout /> : <NavLayout />}
			{children}
			{isDashboard === -1 && <FooterLayout />}
		</Container>
	)
}
