import styled from '@emotion/styled'
import { primary } from './Input.themes'

interface InputI {
	theme: 'primary'
}

const styles = { primary }
export const Input = styled.input(({ theme }: InputI) => styles[theme])
