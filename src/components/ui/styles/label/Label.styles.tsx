import styled from '@emotion/styled'
import { primary } from './Label.themes'

interface LinkI {
	theme: 'primary'
}

const styles = { primary }
export const Label = styled.label(({ theme }: LinkI) => styles[theme])
