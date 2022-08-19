import styled from '@emotion/styled'
import { primary, secondary, oldPrice, newPrice, discount, bigNumber, timerText } from './Paragraph.themes'

interface ParagraphI {
	theme: 'primary' | 'secondary' | 'oldPrice' | 'newPrice' | 'discount' | 'bigNumber' | 'timerText'
}

const styles = { primary, secondary, oldPrice, newPrice, discount, bigNumber, timerText }
export const Paragraph = styled.p(({ theme }: ParagraphI) => styles[theme])
