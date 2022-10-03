import { Container } from 'components/ui/styles/container'
import { Label } from 'components/ui/styles/label'
import { LabelE } from 'components/ui/styles/label/Label.styles'
import React, { ReactNode } from 'react'

interface GroupLayoutI {
	children: ReactNode
	label: string
}

export const GroupLayout: React.FC<GroupLayoutI> = ({ children, label }): JSX.Element => {
	return (
		<Container theme="groupLayout">
			<Label theme={LabelE.secondary}>{label}</Label>
			{children}
		</Container>
	)
}
