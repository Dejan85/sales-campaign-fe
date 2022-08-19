import styled from '@emotion/styled'
import { primary, imageSection } from './Section.themes'

interface SectionI {
	theme: 'primary' | 'imageSection'
}

const styles = { primary, imageSection }
export const Section = styled.section(({ theme }: SectionI) => styles[theme])
