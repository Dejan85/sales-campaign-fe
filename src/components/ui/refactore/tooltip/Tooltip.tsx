import React, { ComponentType, ReactNode } from 'react'
import { TooltipStyles } from './Tooltip.styles'

interface PropsI {
	text: string
}

const tooltipWrapping = (Component: React.FC<any>, props: PropsI): JSX.Element => {
	const { text } = props
	return (
		<Component>
			<div>{text}</div>
		</Component>
	)
}

export const Tooltip = (props: PropsI) => tooltipWrapping(TooltipStyles, props)
