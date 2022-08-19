import { Container } from 'components/ui/styles/container'
import { Paragraph } from 'components/ui/styles/typography/paragraph/Paragraph.styles'
import React from 'react'

interface ContainerComponentI {
	text: string
	data: string
}

export const ContainerComponent: React.FC<ContainerComponentI> = ({ text, data }): JSX.Element => {
	return (
		<Container theme="wrapper">
			<Paragraph as="span" theme="bigNumber">
				{data}
			</Paragraph>
			<Paragraph as="span" theme="timerText">
				{text}
			</Paragraph>
		</Container>
	)
}
