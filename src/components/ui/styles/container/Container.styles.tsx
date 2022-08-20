import styled from '@emotion/styled'

import {
	primary,
	primaryBg,
	secondary,
	wrapper,
	linkWrapper,
	imageWrapper,
	formWrapper,
	inputWrapper,
	buttonWrapper
} from './Container.themes'

interface ContainerI {
	theme:
		| 'primary'
		| 'primaryBg'
		| 'secondary'
		| 'wrapper'
		| 'linkWrapper'
		| 'imageWrapper'
		| 'formWrapper'
		| 'inputWrapper'
		| 'buttonWrapper'
}

const styles = {
	primary,
	primaryBg,
	secondary,
	wrapper,
	linkWrapper,
	imageWrapper,
	formWrapper,
	inputWrapper,
	buttonWrapper
}
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
