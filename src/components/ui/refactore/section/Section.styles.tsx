import styled from '@emotion/styled'

export interface StylePropsI {
	paddingTop?: '70'
}

export const SectionStyles = styled.section<StylePropsI>`
	display: flex;
	flex-direction: column;
	max-width: var(--mwd-650);
	width: var(--wd-100-per);
	padding: var(--pd-r-10);
	padding-top: ${({ paddingTop }) => `var(--pd-${paddingTop})`};
`
