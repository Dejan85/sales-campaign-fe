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
	flexColumn,
	flexCenterAbsolute
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
		| 'flexCenterAbsolute'
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
	flexColumn,
	flexCenterAbsolute
}
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
