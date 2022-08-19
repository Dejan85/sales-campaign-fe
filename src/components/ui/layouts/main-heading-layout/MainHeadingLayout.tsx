import React from 'react'
import { Article } from '../../styles/article'
import { Heading } from '../../styles/typography/heading'

export const MainHeadingLayout: React.FC = (): JSX.Element => {
	return (
		<Article theme="mainHeading">
			<Heading as="h2" theme="primary">
				Narucite Therapy Air Smart uredaj
			</Heading>
		</Article>
	)
}
