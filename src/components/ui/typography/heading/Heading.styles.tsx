import styled from '@emotion/styled'
import { primary, secondary } from './Heading.themes'

interface HeadingI {
	theme: 'primary' | 'secondary'
}

const styles = { primary, secondary }
export const Heading = styled.h1(({ theme }: HeadingI) => styles[theme])
