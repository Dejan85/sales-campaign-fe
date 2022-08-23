import { Container } from 'components/ui/styles/container'
import { Paragraph } from 'components/ui/styles/typography/paragraph'
import React from 'react'

export const NoCampaignsMessage: React.FC = (): JSX.Element => {
	return (
		<Container theme="flexCenterAbsolute">
			<Paragraph theme="primaryMediumFS">There are no campaigns, you have to create them.</Paragraph>
		</Container>
	)
}
