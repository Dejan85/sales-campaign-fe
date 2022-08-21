import styled from '@emotion/styled'

import {
	primary,
	primaryBg,
	secondary,
	dashboard,
	wrapper,
	linkWrapper,
	relative,
	formWrapper,
	inputWrapper,
	buttonWrapper
} from './Container.themes'

interface ContainerI {
	theme:
		| 'primary'
		| 'primaryBg'
		| 'secondary'
		| 'dashboard'
		| 'wrapper'
		| 'linkWrapper'
		| 'relative'
		| 'formWrapper'
		| 'inputWrapper'
		| 'buttonWrapper'
}

const styles = {
	primary,
	primaryBg,
	secondary,
	dashboard,
	wrapper,
	linkWrapper,
	relative,
	formWrapper,
	inputWrapper,
	buttonWrapper
}
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
