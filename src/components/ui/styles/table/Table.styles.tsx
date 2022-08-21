import styled from '@emotion/styled'
import { primary, column, cell } from './Table.themes'

interface ColumnI {
	theme: 'primary' | 'column' | 'cell'
}

const styles = { primary, column, cell }
export const Column = styled.div(({ theme }: ColumnI) => [styles[theme]])
export const Row = styled.div(({ theme }: ColumnI) => [styles[theme]])
