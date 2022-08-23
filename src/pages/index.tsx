import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Container } from 'components/ui/styles/container'
import { Paragraph } from 'components/ui/styles/typography/paragraph'

const IndexPage: NextPage = () => {
	return (
		<Container theme="flexCenterAbsolute">
			<Paragraph theme="primaryMediumFS">Trenutno nije aktivna nijedna akcija</Paragraph>
		</Container>
	)
}

export default IndexPage
