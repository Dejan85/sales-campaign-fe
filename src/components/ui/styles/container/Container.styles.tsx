import styled from '@emotion/styled'

import { primary, secondary, wrapper, linkWrapper, imageWrapper } from './Container.themes'

interface ContainerI {
	theme: 'primary' | 'secondary' | 'wrapper' | 'linkWrapper' | 'imageWrapper'
}

const styles = { primary, secondary, wrapper, linkWrapper, imageWrapper }
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
