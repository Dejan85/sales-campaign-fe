import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { primary } from './Input.themes'
import { FieldError } from 'react-hook-form'

export type InputThemeT = 'primary'

interface InputI {
	theme: InputThemeT
	errors?: FieldError
}

export const inputBorder = (errors?: FieldError) => {
	if (errors) {
		return css`
			outline: 1px solid red;
			color: red;

			&:focus {
				outline: 1px solid red;
			}

			&::placeholder {
				color: red;
			}
		`
	} else {
		return css`
			border: none;
			outline: none;
			&:focus {
				border: none;
				outline: none;
			}

			&::placeholder {
				color: var(--grey);
			}
		`
	}
}

const styles = { primary }
export const Input = styled.input(({ theme, errors }: InputI) => [styles[theme], inputBorder(errors)])
