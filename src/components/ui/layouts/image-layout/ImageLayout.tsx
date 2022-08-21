import React from 'react'
import Image from 'next/image'
import { Container } from '../../styles/container'

export const ImageLayout: React.FC = (): JSX.Element => {
	return (
		<Container theme="relative">
			<Image src="/images/image.jpg" layout="fill" objectFit="cover" />
		</Container>
	)
}
