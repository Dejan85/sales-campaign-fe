import React from 'react'
import { Article } from '../../styles/article'
import { Paragraph } from '../../styles/typography/paragraph/Paragraph.styles'

export const PriceLayout: React.FC = (): JSX.Element => {
	return (
		<Article theme="price">
			<Paragraph theme="oldPrice">$300.00</Paragraph>
			<Paragraph theme="newPrice">$180.00</Paragraph>
			<Paragraph theme="discount">40% OFF</Paragraph>
		</Article>
	)
}
