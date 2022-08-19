import styled from '@emotion/styled'
import { primary } from './Link.themes'

interface LinkI {
	theme: 'primary'
}

const styles = { primary }
export const Link = styled.a(({ theme }: LinkI) => styles[theme])
