import styled from '@emotion/styled'
import { primary } from './Select.themes'
import { FieldError } from 'react-hook-form'
import { inputBorder } from '../input/Input.styles'

export type SelectThemeT = 'primary'

export type SelectI = {
	theme: SelectThemeT
	errors?: FieldError
}

const styles = { primary }
export const Select = styled.select(({ theme, errors }: SelectI) => [styles[theme], inputBorder(errors)])
