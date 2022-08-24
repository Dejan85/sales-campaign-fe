import styled from '@emotion/styled'
import { primary, secondary, deleteBtn } from './Button.themes'

interface ButtonI {
	theme: 'primary' | 'secondary' | 'deleteBtn'
}

const styles = { primary, secondary, deleteBtn }
export const Button = styled.button(({ theme }: ButtonI) => styles[theme])
