import React from 'react'
import Image from 'next/image'
import { Container } from '../../styles/container'

interface ImageLayoutI {
	imageName: string
}

export const ImageLayout: React.FC<ImageLayoutI> = ({ imageName }): JSX.Element => {
	return (
		<Container theme="relative">
			<Image src={`/images/${imageName}`} layout="fill" objectFit="contain" />
		</Container>
	)
}
