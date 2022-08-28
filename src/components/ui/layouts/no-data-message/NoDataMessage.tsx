import { Container } from 'components/ui/styles/container'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import React from 'react'

interface NoDataMessageI {
	message: string
}

export const NoDataMessage: React.FC<NoDataMessageI> = ({ message }): JSX.Element => {
	return (
		<Container theme="flexCenterAbsolute">
			<Paragraph theme="primaryMediumFS">{message}</Paragraph>
		</Container>
	)
}
