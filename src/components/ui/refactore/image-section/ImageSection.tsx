import React, { ComponentType } from 'react'
import { ImageSectionStyles, StylePropsI } from './ImageSection.styles'

interface PropsI extends StylePropsI {
	image: string
}

//TODO: fix any type
const imageWrapping = (Component: any, props: PropsI): JSX.Element => {
	const { image } = props
	return (
		<Component {...props}>
			<img src={`/images/${image}`} alt="image" />
		</Component>
	)
}

export const ImageSection = (props: PropsI) => imageWrapping(ImageSectionStyles, props)
