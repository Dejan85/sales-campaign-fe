import styled from '@emotion/styled'
import { primary } from './TextArea.themes'

interface TextareaI {
	theme: 'primary'
}

const styles = { primary }
export const Textarea = styled.textarea(({ theme }: TextareaI) => styles[theme])
