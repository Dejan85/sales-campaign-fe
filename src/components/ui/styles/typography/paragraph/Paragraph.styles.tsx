import styled from '@emotion/styled'
import { primary, secondary, third, oldPrice, newPrice, discount, bigNumber, timerText } from './Paragraph.themes'

interface ParagraphI {
	theme: 'primary' | 'secondary' | 'third' | 'oldPrice' | 'newPrice' | 'discount' | 'bigNumber' | 'timerText'
}

const styles = { primary, secondary, third, oldPrice, newPrice, discount, bigNumber, timerText }
export const Paragraph = styled.p(({ theme }: ParagraphI) => styles[theme])
