import styled from '@emotion/styled'

import { primary } from './Container.themes'

interface ContainerI {
	theme: 'primary'
}

const styles = { primary }
export const Container = styled.div(({ theme }: ContainerI) => styles[theme])
