import styled from '@emotion/styled'
import { primary, secondary } from './Button.themes'

interface ButtonI {
	theme: 'primary' | 'secondary'
}

const styles = { primary, secondary }
export const Button = styled.button(({ theme }: ButtonI) => styles[theme])
