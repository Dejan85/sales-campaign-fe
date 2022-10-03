import { css } from '@emotion/react'
import styled from '@emotion/styled'

import {
	primary,
	primaryRow,
	primaryBg,
	secondary,
	third,
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
	flexColumn,
	flexCenterAbsolute,
	details,
	flexRow,
	detailsRows,
	modal,
	modalContent,
	groupLayout
} from './Container.themes'

interface ContainerI {
	columnNumber?: number
	theme:
		| 'primary'
		| 'primaryRow'
		| 'primaryBg'
		| 'third'
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
		| 'flexColumn'
		| 'flexCenterAbsolute'
		| 'details'
		| 'flexRow'
		| 'detailsRows'
		| 'modal'
		| 'modalContent'
		| 'groupLayout'
}

const styles = {
	primary,
	primaryRow,
	primaryBg,
	secondary,
	third,
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
	flexColumn,
	flexCenterAbsolute,
	details,
	flexRow,
	detailsRows,
	modal,
	modalContent,
	groupLayout
}

export const Container = styled.div(({ theme, columnNumber }: ContainerI) => [
	styles[theme],
	css({
		gridTemplateColumns: columnNumber && `repeat(${columnNumber}, minmax(100px, auto))`
	})
])
