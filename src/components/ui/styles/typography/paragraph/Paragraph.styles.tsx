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
	error,
	nav
} from './Paragraph.themes'

interface ParagraphI {
	theme:
		| 'primary'
		| 'secondary'
		| 'third'
		| 'oldPrice'
		| 'newPrice'
		| 'discount'
		| 'bigNumber'
		| 'timerText'
		| 'error'
		| 'nav'
}

const styles = { primary, secondary, third, oldPrice, newPrice, discount, bigNumber, timerText, error, nav }
export const Paragraph = styled.p(({ theme }: ParagraphI) => [styles[theme]])
