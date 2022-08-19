import React from 'react'
import { Article } from '../../styles/article'
import { Heading } from '../../styles/typography/heading'
import { Paragraph } from '../../styles/typography/paragraph/Paragraph.styles'

export const SpecialOfferLayout: React.FC = (): JSX.Element => {
	return (
		<Article theme="specialOffer">
			<Heading as="h3" theme="secondary">
				Specijalna ponuda
			</Heading>

			<Paragraph theme="primary">
				Ucestvovanjem u grupnoj kupovini mozete ostvariti popust od 45% u zavisnosti od broja porudzbina
			</Paragraph>
		</Article>
	)
}
