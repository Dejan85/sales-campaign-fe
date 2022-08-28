import styled from '@emotion/styled'
import { primary, secondary } from './Link.themes'

interface LinkI {
	theme: 'primary' | 'secondary'
}

const styles = { primary, secondary }
export const Link = styled.a(({ theme }: LinkI) => styles[theme])
