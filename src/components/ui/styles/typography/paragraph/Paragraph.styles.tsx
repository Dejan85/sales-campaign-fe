import styled from '@emotion/styled'
import {
	primary,
	secondary,
	third,
	oldPrice,
	newPrice,
	discount,
	bigNumber,
	timerText,
	error
} from './Paragraph.themes'

interface ParagraphI {
	theme: 'primary' | 'secondary' | 'third' | 'oldPrice' | 'newPrice' | 'discount' | 'bigNumber' | 'timerText' | 'error'
}

const styles = { primary, secondary, third, oldPrice, newPrice, discount, bigNumber, timerText, error }
export const Paragraph = styled.p(({ theme }: ParagraphI) => [styles[theme]])
