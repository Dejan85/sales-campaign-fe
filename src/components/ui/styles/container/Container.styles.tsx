import styled from '@emotion/styled'

import {
	primary,
	primaryBg,
	secondary,
	fullWidthBg,
	dashboard,
	wrapper,
	linkWrapper,
	relative,
	formWrapper,
	inputWrapper,
	buttonWrapper,
	table,
	tableHeader,
	tableBody
} from './Container.themes'

interface ContainerI {
	theme:
		| 'primary'
		| 'primaryBg'
		| 'secondary'
		| 'fullWidthBg'
		| 'dashboard'
		| 'wrapper'
		| 'linkWrapper'
		| 'relative'
		| 'formWrapper'
		| 'inputWrapper'
		| 'buttonWrapper'
		| 'table'
		| 'tableHeader'
		| 'tableBody'
}

const styles = {
	primary,
	primaryBg,
	secondary,
	fullWidthBg,
	dashboard,
	wrapper,
	linkWrapper,
	relative,
	formWrapper,
	inputWrapper,
	buttonWrapper,
	table,
	tableHeader,
	tableBody
}
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
