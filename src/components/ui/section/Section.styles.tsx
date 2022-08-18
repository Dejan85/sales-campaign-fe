import styled from '@emotion/styled'
import { primary } from './Section.themes'

interface SectionI {
	theme: 'primary'
}

const styles = { primary }
export const Section = styled.section(({ theme }: SectionI) => styles[theme])
