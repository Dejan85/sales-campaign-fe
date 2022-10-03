import React from 'react'
import { Article } from '../../styles/article'
import { Paragraph } from '../../styles/typography/paragraph/Paragraph.styles'

interface PriceLayoutI {
	price: string | undefined
	discountPrice: string | undefined
	discount: string | undefined
}

export const PriceLayout: React.FC<PriceLayoutI> = ({ price, discountPrice, discount }): JSX.Element => {
	return (
		<Article theme="price">
			<Paragraph theme="oldPrice">{`$${price}`}</Paragraph>
			<Paragraph theme="newPrice">{`$${discountPrice}`}</Paragraph>
			<Paragraph theme="discount">{`${discount}% OFF`}</Paragraph>
		</Article>
	)
}
