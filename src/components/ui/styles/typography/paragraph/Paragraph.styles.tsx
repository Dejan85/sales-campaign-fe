import styled from '@emotion/styled'
import {
	primary,
	primaryMediumFS,
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
		| 'primaryMediumFS'
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

const styles = {
	primary,
	primaryMediumFS,
	secondary,
	third,
	oldPrice,
	newPrice,
	discount,
	bigNumber,
	timerText,
	error,
	nav
}
export const Paragraph = styled.p(({ theme }: ParagraphI) => [styles[theme]])
