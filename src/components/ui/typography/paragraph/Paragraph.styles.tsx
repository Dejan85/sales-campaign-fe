import styled from '@emotion/styled'
import { primary, secondary } from './Paragraph.themes'

interface ParagraphI {
	theme: 'primary' | 'secondary'
}

const styles = { primary, secondary }
export const Paragraph = styled.p(({ theme }: ParagraphI) => styles[theme])
