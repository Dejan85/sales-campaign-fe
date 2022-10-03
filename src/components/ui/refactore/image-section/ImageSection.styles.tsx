import styled from '@emotion/styled'

export interface StylePropsI {}

export const ImageSectionStyles = styled.section<StylePropsI>`
	display: flex;
	position: relative;
	width: var(--wd-100-per);

	img {
		max-width: 800px;
		width: 100%;
	}
`
