import React, { ComponentType, ReactNode } from 'react'
import { SectionStyles, StylePropsI } from './Section.styles'

interface PropsI extends StylePropsI {
	children: ReactNode | ReactNode[]
}

const sectionWrapping = (Component: ComponentType<PropsI>, props: PropsI): JSX.Element => {
	const { children } = props
	return <Component {...props}>{children}</Component>
}

export const Section = (props: PropsI) => sectionWrapping(SectionStyles, props)
