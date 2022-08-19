import styled from '@emotion/styled'
import { primary } from './Footer.themes'

interface FooterI {
	theme: 'primary'
}

const styles = { primary }
export const Footer = styled.footer(({ theme }: FooterI) => styles[theme])
