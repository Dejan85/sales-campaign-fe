import styled from '@emotion/styled'
import { primary } from './Header.Themes'

interface HeaderI {
	theme: 'primary'
}

const styles = { primary }
export const Header = styled.header(({ theme }: HeaderI) => styles[theme])
