import { CountdownTimer } from 'components/frontend/countdown-timer'
import { ContainerRow } from 'components/ui/refactore/container'
import React from 'react'
import { Article } from '../../styles/article'
import { Heading } from '../../styles/typography/heading'
import { Paragraph } from '../../styles/typography/paragraph/Paragraph.styles'
import { Const, neededOrders } from './const'

interface SpecialOfferLayoutI {
	totalNumberOfReservations?: string
	currentDiscountLevel?: string
	validReservationsRequired?: string
	nextLevelOfDiscount?: string
	countdownTimestampMs: number
}

export const SpecialOfferLayout: React.FC<SpecialOfferLayoutI> = ({
	totalNumberOfReservations,
	currentDiscountLevel,
	validReservationsRequired,
	nextLevelOfDiscount,
	countdownTimestampMs
}): JSX.Element => {
	return (
		<ContainerRow>
			<Article theme="specialOffer">
				<Heading as="h3" theme="secondary">
					{Const.heading}
				</Heading>
				<Paragraph theme="primary">{Const.paragraph}</Paragraph>
				<CountdownTimer countdownTimestampMs={countdownTimestampMs} />
				<Paragraph style={{ fontWeight: 'bold' }} theme="primary">
					{Const.totalNumberOfReservations} {`${totalNumberOfReservations}`}
				</Paragraph>
				<Paragraph style={{ fontWeight: 'bold' }} theme="primary">
					{Const.discount}: {currentDiscountLevel}%
				</Paragraph>
				<Paragraph style={{ fontWeight: 'bold' }} theme="primary">
					{neededOrders(validReservationsRequired, nextLevelOfDiscount)}
				</Paragraph>
			</Article>
		</ContainerRow>
	)
}
