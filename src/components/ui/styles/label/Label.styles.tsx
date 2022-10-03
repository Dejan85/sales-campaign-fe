import styled from '@emotion/styled'
import { primary, secondary, third } from './Label.themes'

export enum LabelE {
	primary = 'primary',
	secondary = 'secondary',
	third = 'third'
}

interface LabelI {
	theme: LabelE
}

const styles = { primary, secondary, third }
export const Label = styled.label(({ theme }: LabelI) => styles[theme])
