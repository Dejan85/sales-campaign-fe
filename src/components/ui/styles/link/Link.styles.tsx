import styled from '@emotion/styled'
import { primary, secondary, third } from './Link.themes'

interface LinkI {
	theme: 'primary' | 'secondary' | 'third'
}

const styles = { primary, secondary, third }
export const Link = styled.a(({ theme }: LinkI) => styles[theme])
