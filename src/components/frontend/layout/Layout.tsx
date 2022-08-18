import { Container } from 'components/ui/container'
import React, { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const Layout: React.FC<Props> = ({ children }): JSX.Element => {
	return <Container theme="primary">{children}</Container>
}
