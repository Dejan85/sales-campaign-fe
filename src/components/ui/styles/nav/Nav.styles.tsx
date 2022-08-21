import styled from '@emotion/styled'
import { primary } from './Nav.themes'

interface NavI {
	theme: 'primary'
}

const styles = { primary }
export const Nav = styled.nav(({ theme }: NavI) => styles[theme])
