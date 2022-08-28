import styled from '@emotion/styled'

export const TableCell = styled.div<{ columnNumber: number }>`
	display: flex;
	justify-content: space-around;
	align-items: center;
	text-align: center;
	padding: var(--pd-10);
	border: 1px solid var(--light-grey);
	&:nth-of-type(-n + ${({ columnNumber }) => columnNumber}) {
		background-color: var(--primary-color);
		color: white;
	}
`
