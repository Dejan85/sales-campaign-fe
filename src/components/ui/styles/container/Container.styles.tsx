import { css } from '@emotion/react'
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
	flexColumn,
	flexCenterAbsolute
} from './Container.themes'

interface ContainerI {
	columnNumber?: number
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
	flexColumn,
	flexCenterAbsolute
}

export const Container = styled.div(({ theme, columnNumber }: ContainerI) => [
	styles[theme],
	css({
		gridTemplateColumns: columnNumber && `repeat(${columnNumber}, minmax(100px, auto))`
	})
])
