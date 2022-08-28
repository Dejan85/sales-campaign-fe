import styled from '@emotion/styled'
import { primary, secondary, deleteBtn, tableBtn } from './Button.themes'

interface ButtonI {
	theme: 'primary' | 'secondary' | 'deleteBtn' | 'tableBtn'
}

const styles = { primary, secondary, deleteBtn, tableBtn }
export const Button = styled.button(({ theme }: ButtonI) => styles[theme])
