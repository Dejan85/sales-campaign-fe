import styled from '@emotion/styled'

import {
	primary,
	primaryBg,
	secondary,
	fullWidthBg,
	dashboard,
	wrapper,
	linkWrapper,
	linkWrapperSecondary,
	relative,
	formWrapper,
	inputWrapper,
	buttonWrapper,
	table,
	tableHeader,
	tableBody,
	flexColumn
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
		| 'linkWrapperSecondary'
		| 'relative'
		| 'formWrapper'
		| 'inputWrapper'
		| 'buttonWrapper'
		| 'table'
		| 'tableHeader'
		| 'tableBody'
		| 'flexColumn'
}

const styles = {
	primary,
	primaryBg,
	secondary,
	fullWidthBg,
	dashboard,
	wrapper,
	linkWrapper,
	linkWrapperSecondary,
	relative,
	formWrapper,
	inputWrapper,
	buttonWrapper,
	table,
	tableHeader,
	tableBody,
	flexColumn
}
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
