import styled from '@emotion/styled'

export const TableCell = styled.div<{ columnNumber: number }>`
	padding: var(--pd-10);
	border: 1px solid var(--light-grey);
	&:nth-of-type(-n + ${({ columnNumber }) => columnNumber}) {
		background-color: var(--primary-color);
		color: white;
	}
`
