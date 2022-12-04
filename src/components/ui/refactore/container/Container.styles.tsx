import styled from '@emotion/styled'

export interface StylePropsI {
	justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'end'
	alignItems?: 'stretch' | 'center' | 'start' | 'end'
	width?: '1440' | '230'
	margin?: 'default'
	padding?: 'reset'
	gap?: string
}

export const ContainerRowStyles = styled.div<StylePropsI>`
	display: flex;
	position: relative;
	justify-content: ${({ justifyContent }) => justifyContent};
	align-items: ${({ alignItems }) => alignItems};
	max-width: ${({ width = 1440 }) => ` var(--wd-${width})`};
	width: 100%;
	margin: ${({ margin = '0 auto' }) => (margin === 'default' ? 0 : margin)};
	padding: ${({ padding }) => (padding === 'reset' ? 0 : 'var(--pd-10)')};
	gap: ${({ gap }) => gap};
`

export const ContainerColumnStyles = styled(ContainerRowStyles)`
	flex-direction: column;
`

export const Container = styled.div``
