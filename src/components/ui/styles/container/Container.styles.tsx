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
	buttonWrapper,
	table,
	tableRow
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
		| 'table'
		| 'tableRow'
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
	buttonWrapper,
	table,
	tableRow
}
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
