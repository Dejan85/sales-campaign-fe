import React, { ComponentType, ReactNode } from 'react'
import { ContainerRowStyles, ContainerColumnStyles, StylePropsI } from './Container.styles'

interface PropsI extends StylePropsI {
	children: ReactNode | ReactNode[]
}

const containerWrapping = (Component: ComponentType<PropsI>, props: PropsI): JSX.Element => {
	const { children } = props
	return <Component {...props}>{children}</Component>
}

export const ContainerRow = (props: PropsI) => containerWrapping(ContainerRowStyles, props)
export const ContainerColumn = (props: PropsI) => containerWrapping(ContainerColumnStyles, props)
