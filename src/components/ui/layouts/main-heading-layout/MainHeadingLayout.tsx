import React from 'react'
import { Article } from '../../styles/article'
import { Heading } from '../../styles/typography/heading'

interface MainHeadingLayoutI {
	headingText: string
}

export const MainHeadingLayout: React.FC<MainHeadingLayoutI> = ({ headingText }): JSX.Element => {
	return (
		// <Article theme="mainHeading">
		<Heading as="h2" theme="primary">
			{headingText}
		</Heading>
		// </Article>
	)
}
