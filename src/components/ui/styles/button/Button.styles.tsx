import styled from '@emotion/styled'
import { primary } from './Button.themes'

interface ButtonI {
	theme: 'primary'
}

const styles = { primary }
export const Button = styled.button(({ theme }: ButtonI) => styles[theme])
